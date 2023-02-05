/* eslint-disable import/no-extraneous-dependencies */
import {
  createServer,
} from 'miragejs';
import users from './mirage/users';

export default function makeServer({
  environment = 'test' || 'development',
} = {}) {
  const createdServer = createServer({
    environment,
    models: {
      ...users().models,
    },

    factories: {
      ...users().factories,
    },

    seeds(server) {
      users().seeds(server);
    },
    routes() {
      this.timing = 500;
      this.namespace = 'api';
      users().routes(this);
    },
  });

  return createdServer;
}
