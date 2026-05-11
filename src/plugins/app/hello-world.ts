import fp from 'fastify-plugin';
import { hello as helloText, world as worldText } from '../../consts/hello-world.js';

declare module 'fastify' {
  interface FastifyInstance {
    helloWorld: ReturnType<typeof helloWorld>;
  }
}

function hello(): string {
  return helloText;
}

function world(): string {
  return worldText;
}

function helloWorld(): {
  hello: () => string;
  world: () => string;
} {
  return {
    hello,
    world
  };
}

export default fp(
  async (fastify): Promise<void> => {
    fastify.decorate('helloWorld', helloWorld());
  },
  {
    name: 'helloWorld',
    dependencies: []
  }
);
