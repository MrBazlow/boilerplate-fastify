import { fastifyPlugin } from "fastify-plugin";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const formbody: FastifyPluginAsyncTypebox = async (fastify, opts) => {
	const { fastifyFormbody } = await import("@fastify/formbody");
	await fastify.register(fastifyFormbody);
	fastify.log.info("@fastify/formbody has been registered");
};

export default fastifyPlugin(formbody, {
	name: "formbody",
});
