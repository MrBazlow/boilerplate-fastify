import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";
import { Type } from "@sinclair/typebox";

const action: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  fastify.get(
    "",
    {
      exposeHeadRoute: false,
      schema: {
        response: {
          418: Type.Object({
            statusCode: Type.Literal(418),
            error: Type.Literal("I'm a teapot"),
            message: Type.Literal("I'm a teapot"),
          }),
        },
      },
    },
    async (request, reply) => {
      await reply.imateapot();
    }
  );
};

export default action;
