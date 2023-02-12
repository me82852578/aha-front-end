/* eslint-disable import/no-extraneous-dependencies */
import {
  Factory, Instantiate, Model, Registry, Request, Response, Server,
} from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { faker } from '@faker-js/faker';
import { UserType } from '../types';

type UsersResponse = {
  total:number
  totalPages:number
  page:number
  pageSize:number
  data:UserType[]
};

const UserModel: ModelDefinition<UserType> = Model.extend({});
const UserFactory = Factory.extend<UserType>(
  {
    id: () => faker.datatype.uuid(),
    name: () => faker.name.fullName(),
    username: () => faker.name.fullName(),
    avater: () => faker.image.avatar(),
    isFollowing: () => faker.datatype.boolean(),
  },
);

const models = { user: UserModel };
const factories = { user: UserFactory };

type AppRegistry = Registry<typeof models, typeof factories>;
type AppSchema = Schema<AppRegistry>;

function makeResponse(
  usersModels:Instantiate<AppRegistry, 'user'>[],
  page: string,
  pageSize: string,
):UsersResponse {
  const totalFound = usersModels.length;
  const pageInt = parseInt(page, 10);
  const pageSizeInt = parseInt(pageSize, 10);
  const totalPages = Math.ceil(totalFound / pageSizeInt);
  return {
    total: totalFound,
    totalPages,
    page: pageInt,
    pageSize: pageSizeInt,
    data: usersModels.slice(
      pageSizeInt * (pageInt - 1),
      pageSizeInt * (pageInt - 1) + pageSizeInt,
    ),
  };
}

export default function users() {
  return {
    models,
    factories,
    seeds(server:Server) {
      server.createList('user', 100);
    },
    routes(server:Server) {
      server.get('/users/all', (schema: AppSchema, request:Request) => {
        const { page, pageSize, keyword = '' } = request.queryParams;
        const keywordRegExp = new RegExp(keyword, 'i');
        const findByKeyword = schema.where('user', (user) => {
          if (!keyword) return true;
          if (!user.name || !user.username) return false;
          return keywordRegExp.test(user.name) || keywordRegExp.test(user.username);
        });

        const responseData = makeResponse(findByKeyword.models, page, pageSize);

        return new Response(200, { }, responseData);
      });

      server.get('/users/friends', (schema: AppSchema, request:Request) => {
        const { page, pageSize, keyword } = request.queryParams;
        const keywordRegExp = new RegExp(keyword, 'i');
        const findByKeyword = schema.where('user', (user) => {
          if (!user.isFollowing) return false;
          if (!keyword) return true;
          if (!user.name || !user.username) return false;
          return keywordRegExp.test(user.name) || keywordRegExp.test(user.username);
        });

        const responseData = makeResponse(findByKeyword.models, page, pageSize);

        return new Response(200, { }, responseData);
      });
    },
  };
}
