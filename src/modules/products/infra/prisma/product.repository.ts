// src/modules/products/infra/prisma/product.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { Product } from '../../domain/product.entity';
import { UpdateProductDto } from '../../http/dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(product: Product) {
    return this.prisma.$transaction(async (tx) => {
      const createdProduct = await tx.product.create({
        data: {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          image: product.image,
          tenantId: product.tenantId,
          categoryId: product.categoryId,
        },
      });

      for (const variant of product.variants) {
        const createdVariant = await tx.productVariant.create({
          data: {
            id: variant.id,
            name: variant.name,
            price: variant.price,
            stock: variant.stock,
            sku: variant.sku,
            tenantId: variant.tenantId,
            productId: product.id,
          },
        });

        for (const attr of variant.attributes) {
          await tx.productVariantAttribute.create({
            data: {
              id: attr.id,
              productVariantId: createdVariant.id,
              attributeId: attr.attributeId,
              attributeValueId: attr.attributeValueId,
            },
          });
        }
      }

      return createdProduct;
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

  async update(id: string, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
