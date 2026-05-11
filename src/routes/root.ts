import type { FastifyInstance, FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: '`Hello! See documentation at xxxx://xxxx:xxxxxx/api/docs'
              }
            },
            required: ['message']
          }
        }
      }
    },
    async function ({ protocol, hostname, port }) {
      return {
        message: `Hello! See documentation at ${protocol}://${hostname}:${port}/api/docs`
      };
    }
  );
};

export default root;
