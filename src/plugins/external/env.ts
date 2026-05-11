import env from '@fastify/env';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    config: {
      SERVER_PORT: number;
      SERVER_HOST: string;
      FASTIFY_CLOSE_GRACE_DELAY: number;
    };
  }
}

const schema = {
  type: 'object',
  required: [],
  properties: {
    SERVER_PORT: {
      type: 'number',
      default: 3000
    },
    SERVER_HOST: {
      type: 'string',
      default: 'localhost'
    },
    FASTIFY_CLOSE_GRACE_DELAY: {
      type: 'number',
      default: 500
    }
  }
};

export default fp(
  async (fastify): Promise<void> => {
    fastify.register(env, {
      confKey: 'config',
      schema,
      dotenv: true
    });
  },
  {
    name: 'config'
  }
);
