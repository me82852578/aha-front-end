/* eslint-disable import/no-extraneous-dependencies */
import {
  Factory, Model, Registry, Response, createServer,
} from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { faker } from '@faker-js/faker';
import { User } from './types';

const UserModel: ModelDefinition<User> = Model.extend({});
const UserFactory = Factory.extend<User>(
  {
    id: () => faker.datatype.uuid(),
    name: () => faker.name.fullName(),
  },
);

const models = { user: UserModel };
const factories = { user: UserFactory };

type AppRegistry = Registry<typeof models, typeof factories>;
type AppSchema = Schema<AppRegistry>;

export default function makeServer({
  environment = 'test' || 'development',
} = {}) {
  return createServer({
    environment,

    models: {
      user: UserModel,
    },

    factories: {
      user: UserFactory,
    },

    seeds(server) {
      server.createList('user', 100);
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema: AppSchema) => {
        const userSchema = schema.all('user');

        return new Response(200, { }, userSchema.models);
      });
    },
  });
}
