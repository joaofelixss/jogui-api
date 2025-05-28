export class Employee {
  constructor(
    public id: string,
    public name: string,
    public position: string,
    public salary: number,
    public isActive: boolean,
    public tenantId: string,
    public createdAt: Date,
    public updatedAt: Date,
  ) {}

  // Exemplo de método de domínio
  toggleStatus() {
    this.isActive = !this.isActive;
  }

  updateDetails(name: string, position: string, salary: number) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }
}
