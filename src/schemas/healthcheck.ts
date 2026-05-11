export const healthSchema = {
  $id: 'healthResponse',
  type: 'object',
  properties: {
    status: {
      type: 'string',
      example: 'ok'
    }
  },
  required: ['status']
} as const;
