import { Tests } from '@prisma/client';
import { RestModel } from './rest_model';

export const toDTO = (entity: Tests): RestModel => {
  return {
    id: entity.id,
    name: entity.name,
    email: entity.email,
  };
};
