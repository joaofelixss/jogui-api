import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { CreateProductDto } from './http/dtos/create-product.dto';
import { UpdateProductDto } from './http/dtos/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(tenantId: string, dto: CreateProductDto) {
    return this.prisma.$transaction(async (tx) => {
      const product = await tx.product.create({
        data: {
          name: dto.name,
          description: dto.description,
          price: dto.price,
          image: dto.image,
          categoryId: dto.categoryId,
          tenantId,
        },
      });

      // Cria as variantes
      for (const variantDto of dto.variants) {
        const variant = await tx.productVariant.create({
          data: {
            name: variantDto.name,
            price: variantDto.price,
            stock: variantDto.stock,
            sku: variantDto.sku,
            tenantId,
            productId: product.id,
          },
        });

        // Cria os atributos da variante
        for (const attr of variantDto.attributes) {
          await tx.productVariantAttribute.create({
            data: {
              productVariantId: variant.id,
              attributeId: attr.attributeId,
              attributeValueId: attr.attributeValueId,
            },
          });
        }
      }

      return product;
    });
  }

  async findAll(tenantId: string) {
    const products = await this.prisma.product.findMany({
      where: { tenantId },
      include: {
        category: true,
        variants: {
          include: {
            attributes: {
              include: {
                attribute: true,
                attributeValue: true,
              },
            },
          },
        },
      },
    });

    return products.map((product) => {
      const variants = product.variants.map((variant) => ({
        id: variant.id,
        name: variant.name,
        price: variant.price,
        stock: variant.stock,
        attributes: variant.attributes.map((attr) => ({
          id: attr.id,
          attributeId: attr.attributeId,
          attributeName: attr.attribute.name,
          attributeValueId: attr.attributeValueId,
          attributeValue: attr.attributeValue.value,
        })),
      }));

      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: product.category,
        variants,
      };
    });
  }

  async findOne(tenantId: string, id: string) {
    const product = await this.prisma.product.findFirst({
      where: { id, tenantId },
      include: {
        category: true,
        variants: {
          include: {
            attributes: {
              include: {
                attribute: true,
                attributeValue: true,
              },
            },
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('Produto não encontrado');
    }

    // Organiza os atributos em formato mais legível por variante
    const variantsWithAttributes = product.variants.map((variant) => {
      const attributes = variant.attributes.map((attr) => ({
        id: attr.id,
        attributeId: attr.attributeId,
        attributeName: attr.attribute.name,
        attributeValueId: attr.attributeValueId,
        attributeValue: attr.attributeValue.value,
      }));

      return {
        id: variant.id,
        name: variant.name,
        price: variant.price,
        stock: variant.stock,
        attributes,
      };
    });

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      category: product.category,
      variants: variantsWithAttributes,
    };
  }

  async update(tenantId: string, id: string, dto: UpdateProductDto) {
    await this.findOne(tenantId, id); // validação

    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async remove(tenantId: string, id: string) {
    await this.findOne(tenantId, id); // validação

    return this.prisma.product.delete({
      where: { id },
    });
  }
}
