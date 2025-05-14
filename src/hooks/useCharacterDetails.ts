import { useQuery } from "@tanstack/react-query";
import { fetch } from "expo/fetch";
import { Env } from "@app/Env";
import { z } from "zod";

export const CharacterDetailsSchema = z.object({
  id: z.string(),
  name: z.string(),
  birthYear: z.string(),
  gender: z.string(),
  eyeColor: z.string(),
  hairColor: z.string(),
  height: z.string(),
  mass: z.string(),
  moviesShort: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
});
export type CharacterDetails = z.infer<typeof CharacterDetailsSchema>;

async function getCharacterDetails(
  characterId: string,
): Promise<CharacterDetails> {
  const url = new URL("getCharacterDetails", Env.EXPO_PUBLIC_SERVER_URL);
  url.searchParams.set("characterId", characterId);
  const result = await fetch(url.toString());
  const json = await result.json();
  return CharacterDetailsSchema.parse(json);
}

export const useCharacterDetails = (characterId: string) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getCharacterDetails(characterId),
    queryKey: ["getCharacterDetails", characterId],
  });

  return {
    characterDetails: data,
    isCharacterDetailsLoading: isLoading,
  };
};
