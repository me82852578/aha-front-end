/* eslint-disable import/no-extraneous-dependencies */
import {
  Factory, Model, Registry, Request, Response, Server,
} from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { faker } from '@faker-js/faker';
import { User } from '../types';

type UsersResponse = {
  total:number
  totalPages:number
  page:number
  pageSize:number
  data:User[]
};

const UserModel: ModelDefinition<User> = Model.extend({});
const UserFactory = Factory.extend<User>(
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

export default function users() {
  const total = 100;
  return {
    models,
    factories,
    seeds(server:Server) {
      server.createList('user', total);
    },
    routes(server:Server) {
      server.get('/users/all', (schema: AppSchema, request:Request) => {
        const { page, pageSize } = request.queryParams;
        const pageInt = parseInt(page, 10);
        const pageSizeInt = parseInt(pageSize, 10);
        const totalPages = Math.ceil(total / pageSizeInt);
        const userSchema = schema.all('user');

        const responseData : UsersResponse = {
          total,
          totalPages,
          page: pageInt,
          pageSize: pageSizeInt,
          data: userSchema.models.slice(pageSizeInt * pageInt, pageSizeInt * pageInt + pageSizeInt),
        };

        return new Response(200, { }, responseData);
      });

      server.get('/users/friends', (schema: AppSchema, request:Request) => {
        const { page, pageSize } = request.queryParams;
        const pageInt = parseInt(page, 10);
        const pageSizeInt = parseInt(pageSize, 10);
        const friendUserSchema = schema.where('user', { isFollowing: true });
        const totalFound = friendUserSchema.models.length;
        const totalPages = Math.ceil(totalFound / pageSizeInt);

        const responseData : UsersResponse = {
          total: totalFound,
          totalPages,
          page: pageInt,
          pageSize: pageSizeInt,
          data: friendUserSchema
            .models
            .slice(pageSizeInt * pageInt, pageSizeInt * pageInt + pageSizeInt),
        };

        return new Response(200, { }, responseData);
      });
    },
  };
}
