import { z } from "zod";

const EnvScheme = z.object({
  EXPO_PUBLIC_SERVER_URL: z.string(),
});

export const Env = EnvScheme.parse({
  EXPO_PUBLIC_SERVER_URL: process.env.EXPO_PUBLIC_SERVER_UR,
});
