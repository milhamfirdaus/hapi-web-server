const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  server.route(routes);
  server.route({
    method: "*",
    path: "/{any*}",
    handler: (req, h) => {
      return h.response("404 not Found").code(404);
    },
  });
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
