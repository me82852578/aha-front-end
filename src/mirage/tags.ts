/* eslint-disable import/no-extraneous-dependencies */
import {
  Factory, Model, Registry, Response, Server,
} from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { faker } from '@faker-js/faker';
import { TagType } from '../types';

type TagsResponseProps = TagType[];

const TagModel: ModelDefinition<TagType> = Model.extend({});
const TagFactory = Factory.extend<TagType>(
  {
    id: () => faker.datatype.uuid(),
    name: () => faker.name.fullName(),
    count: () => faker.datatype.number({
      min: 10,
      max: 200,
    }),
  },
);

const models = { tag: TagModel };
const factories = { tag: TagFactory };

type AppRegistry = Registry<typeof models, typeof factories>;
type AppSchema = Schema<AppRegistry>;

export default function tags() {
  const total = 24;
  return {
    models,
    factories,
    seeds(server:Server) {
      server.createList('tag', total);
    },
    routes(server:Server) {
      server.get('/tags', (schema: AppSchema) => {
        const tagsSchema = schema.all('tag');
        const responseData : TagsResponseProps = tagsSchema.models;
        return new Response(200, { }, responseData);
      });
    },
  };
}
