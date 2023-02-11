/* eslint-disable import/no-extraneous-dependencies */
import {
  createServer,
} from 'miragejs';
import { users, tags } from './mirage';

export default function makeServer({
  environment = 'test' || 'development',
} = {}) {
  const createdServer = createServer({
    environment,
    models: {
      ...users().models,
      ...tags().models,
    },

    factories: {
      ...users().factories,
      ...tags().factories,
    },

    seeds(server) {
      users().seeds(server);
      tags().seeds(server);
    },
    routes() {
      this.timing = 500;
      this.namespace = 'api';
      users().routes(this);
      tags().routes(this);
    },
  });

  return createdServer;
}
