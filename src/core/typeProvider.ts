import { fastifyPlugin } from "fastify-plugin";
import { TypeBoxValidatorCompiler, type TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import type { FastifyPluginAsync } from "fastify";

const typeProvider: FastifyPluginAsync = async (fastify) => {
	fastify.setValidatorCompiler(TypeBoxValidatorCompiler);
	fastify.withTypeProvider<TypeBoxTypeProvider>();
	fastify.log.info("@fastify/type-provider-typebox has been registered");
};

export default fastifyPlugin(typeProvider, {
	name: "typeProvider",
	encapsulate: false,
});
