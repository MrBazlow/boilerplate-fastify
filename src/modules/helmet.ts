import { fastifyPlugin } from "fastify-plugin";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const helmet: FastifyPluginAsyncTypebox = async (fastify, opts) => {
	const { fastifyHelmet } = await import("@fastify/helmet");
	await fastify.register(fastifyHelmet);
	fastify.log.info("@fastify/helmet has been registered");
};

export default fastifyPlugin(helmet, {
	name: "helmet",
});
