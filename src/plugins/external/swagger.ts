import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fp from 'fastify-plugin';
import projectData from '../../../package.json' with { type: 'json' };

export default fp(async fastify => {
  const { description, name, version } = projectData;
  fastify.register(fastifySwagger, {
    openapi: {
      info: {
        title: name.toLocaleUpperCase(),
        description,
        version
      },
      tags: [
        {
          name: 'Hello World',
          description: 'Hello World description'
        }
      ]
    }
  });

  fastify.register(fastifySwaggerUi, {
    routePrefix: '/api/docs',
    uiConfig: {
      deepLinking: true
    },
    staticCSP: true,
    transformStaticCSP: (header): string => header
  });
});
