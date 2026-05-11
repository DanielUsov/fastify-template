import type { FastifyPluginAsyncJsonSchemaToTs } from '@fastify/type-provider-json-schema-to-ts';
import { healthSchema } from '../../schemas/healthcheck.js';


const routes: FastifyPluginAsyncJsonSchemaToTs = async (fastify): Promise<void> => {
  fastify.addSchema(healthSchema);
  fastify.get(
    '/',
    {
      schema: {
        response: {
          200: healthSchema
        },
        tags: ['Healthcheck']
      }
    },
    async (_request, reply): Promise<void> => {
      reply.code(200).send({
        status: 'ok'
      });
    }
  );
};

export default routes;
