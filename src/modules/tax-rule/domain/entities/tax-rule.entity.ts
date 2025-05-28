export class TaxRule {
  id: string;
  name: string;
  state?: string;
  type: string;
  rate: number;
  condition?: string;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}
