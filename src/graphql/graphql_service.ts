import { Injectable } from '@nestjs/common';
import { data } from './graphql_model';
import { graphqlModel } from './graphql_model';

@Injectable()
export class GraphQLService {
  getDataById(id: string): graphqlModel {
    return data.find((d) => d.id === id);
  }
  getDataByName(name: string): graphqlModel {
    return data.find((d) => d.name === name);
  }
  getDataByEmail(email: string): graphqlModel {
    return data.find((d) => d.email === email);
  }
}
