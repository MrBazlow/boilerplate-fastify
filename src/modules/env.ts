import { fastifyPlugin } from "fastify-plugin";
import { Type, type Static } from "@sinclair/typebox";

import type { FastifyPluginAsyncTypebox } from "@fastify/type-provider-typebox";

const schema = Type.Object({
	NODE_ENV: Type.Union([Type.Literal("development"), Type.Literal("production"), Type.Literal("test")], {
		default: "production",
	}),
	PORT: Type.Number({ default: 3000 }),
	COOKIE_SECRET: Type.String({ default: "secret" }),
});

type Env = Static<typeof schema>;

const env: FastifyPluginAsyncTypebox = async (fastify) => {
	const { fastifyEnv } = await import("@fastify/env");
	await fastify.register(fastifyEnv, { schema, dotenv: true });
	fastify.log.info("@fastify/env has been registered");
};

export default fastifyPlugin(env, {
	name: "env"
});

declare global {
	namespace NodeJS {
		// biome-ignore lint/suspicious/noEmptyInterface: <explanation>
		interface ProcessEnv extends Env {}
	}
}

declare module "fastify" {
	interface FastifyInstance {
		config: Env;
	}
}
