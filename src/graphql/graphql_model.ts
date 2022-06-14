import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class graphqlModel {
  @Field({ description: '유저의 아이디' })
  id: string;

  @Field({ description: '유저의 이름' })
  name: string;

  @Field({ description: '유저의 이메일' })
  email: string;
}

export const data: graphqlModel[] = [
  {
    id: '1',
    name: '이재왕',
    email: 'jw@naver.com',
  },
  {
    id: '2',
    name: '지웅재',
    email: 'uj@naver.com',
  },
  {
    id: '3',
    name: '이봉주',
    email: 'bj@naver.com',
  },
];
