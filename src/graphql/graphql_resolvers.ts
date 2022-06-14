import { Args, Query, Resolver } from '@nestjs/graphql';
import { graphqlModel } from './graphql_model';
import { GraphQLService } from './graphql_service';
import { GetArgs } from './graphql_get_args';

@Resolver((of) => graphqlModel)
export class GraphqlResolver {
  constructor(private graphqlSvc: GraphQLService) {}

  @Query((returns) => graphqlModel)
  async findModel(@Args() args: GetArgs) {
    if (args.id) {
      return this.graphqlSvc.getDataById(args.id);
    }
    if (args.name) {
      return this.graphqlSvc.getDataByName(args.name);
    }
    if (args.email) {
      return this.graphqlSvc.getDataByEmail(args.email);
    }
    return null;
  }
}
