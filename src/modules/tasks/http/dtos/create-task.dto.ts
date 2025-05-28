export class CreateTaskDto {
  title: string;
  description?: string;
  assignedToId: string;
  createdById: string;
  tenantId: string;
}
