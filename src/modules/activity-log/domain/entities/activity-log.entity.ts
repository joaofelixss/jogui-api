export class ActivityLog {
  constructor(
    public readonly id: string,
    public readonly action: string,
    public readonly createdAt: Date,
    public readonly tenantId: string,
    public readonly userId: string,
  ) {}
}
