export const helloWorldSchema = {
  $id: 'helloWorldResponse',
  type: 'object',
  properties: {
    message: {
      type: 'string',
      example: 'Hello World'
    }
  },
  required: ['message']
} as const;
