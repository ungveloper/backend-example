import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetArgs {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  email?: string;
}
