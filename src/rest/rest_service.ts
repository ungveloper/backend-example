import { Injectable } from '@nestjs/common';
import { Tests } from '@prisma/client';
import { PrismaService } from '../prisma.servics';

@Injectable()
export class RestService {
  constructor(private readonly prismaSvc: PrismaService) {}

  async getDataByIdAsync(id: number): Promise<Tests> {
    return await this.prismaSvc.tests.findFirst({
      where: {
        id,
      },
    });
  }
  async getDataByNameAsync(name: string): Promise<Tests> {
    return await this.prismaSvc.tests.findFirst({
      where: {
        name,
      },
    });
  }
  async getDataByEmailAsync(email: string): Promise<Tests> {
    return await this.prismaSvc.tests.findFirst({
      where: {
        email,
      },
    });
  }
}
