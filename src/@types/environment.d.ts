declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT: number;
      SERVER_HOST: string;
      FASTIFY_CLOSE_GRACE_DELAY: number;
    }
  }
}
