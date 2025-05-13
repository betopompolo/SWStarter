import { type } from "arktype";

const EnvScheme = type({
  SERVER_URL: "string",
});

function parseEnv(): typeof EnvScheme.infer {
  const result = EnvScheme({
    SERVER_URL: process.env.SERVER_URL,
  });
  if (result instanceof type.errors) {
    throw new Error(result.toString());
  }
  return result;
}

export const Env = parseEnv();
