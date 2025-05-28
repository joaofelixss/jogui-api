export class AutoNotificationEntity {
  constructor(
    public readonly id: string,
    public readonly type: string,
    public readonly event: string,
    public readonly message: string,
    public readonly active: boolean,
    public readonly tenantId: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}
}
