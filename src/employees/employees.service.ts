import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService){}

  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.databaseService.employee.create({
      data: createEmployeeDto
    })
  }

  async findAll(role?: Role) {
    return this.databaseService.employee.findMany({
      where: {
        role: role
      }
    })
  }

  async findOne(id: number) {
    return this.databaseService.employee.findFirst({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    return this.databaseService.employee.update({
      where: {
        id: id
      },
      data: updateEmployeeDto
    })
  }

  async remove(id: number) {
    return this.databaseService.employee.delete({
      where: {
        id: id
      }
    })
  }
}
