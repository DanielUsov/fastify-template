import type { FastifyPluginAsyncJsonSchemaToTs } from '@fastify/type-provider-json-schema-to-ts';
import { helloWorldSchema } from '../../schemas/helloWorld.js';

const routes: FastifyPluginAsyncJsonSchemaToTs = async (fastify): Promise<void> => {
  fastify.addSchema(helloWorldSchema);
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: helloWorldSchema
        },
        tags: ['Hello World']
      }
    },
    async (_request, reply): Promise<void> => {
      const helloWorld = fastify.helloWorld.hello() + fastify.helloWorld.world();
      reply.code(200).send({
        message: helloWorld
      });
    }
  );
};

export default routes;
