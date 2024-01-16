import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import Sharp from "sharp";

import {
  Type,
  type FastifyPluginAsyncTypebox,
} from "@fastify/type-provider-typebox";

const action: FastifyPluginAsyncTypebox = async (fastify, opts) => {
  fastify.post(
    "/data",
    {
      exposeHeadRoute: false,
      schema: {
        consumes: ["multipart/form-data"],
        body: Type.Object({
          name: Type.String(),
          email: Type.String(),
          password: Type.String(),
          password_confirmation: Type.String(),
          avatar: Type.Uint8Array(),
        }),
      },
    },
    async (request, reply) => {
      Sharp(request.body.avatar, { animated: true })
        .toFormat("webp")
        .toFile("data/avatar.webp");
      const data = { ...request.body, avatar: "avatar.webp" };
      await writeFile(
        resolve("data", "data.json"),
        JSON.stringify(data, null, 2),
        "utf-8"
      );
      await reply.code(200).send({ message: "success" });
    }
  );
};

export default action;
