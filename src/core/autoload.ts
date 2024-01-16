import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { fastifyPlugin } from "fastify-plugin";
import { fastifyAutoload } from "@fastify/autoload";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const autoload: FastifyPluginAsyncTypebox = async (fastify) => {
	const currentDir = dirname(fileURLToPath(import.meta.url));

	await fastify.register(fastifyAutoload, {
		dir: resolve(currentDir, "../modules"),
		encapsulate: false
	});

	await fastify.register(fastifyAutoload, {
		dir: resolve(currentDir, "../routes"),
		routeParams: true,
	});

	fastify.log.info("@fastify/autoload has been registered");
};

export default fastifyPlugin(autoload, {
	name: "autoload",
	encapsulate: false,
});
