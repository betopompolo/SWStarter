import { useQuery } from "@tanstack/react-query";

export interface CharacterDetails {
  id: string;
  name: string;
  birthYear: string;
  gender: string;
  eyeColor: string;
  hairColor: string;
  height: number;
  mass: number;
  movies: {
    id: string;
    name: string;
  }[];
}

async function getCharacterDetails(
  characterId: string,
): Promise<CharacterDetails> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id: characterId,
    name: "Bib Fortuna",
    birthYear: "24BBY",
    gender: "male",
    eyeColor: "brown",
    hairColor: "black",
    height: 183,
    mass: 84,
    movies: [{ id: "1", name: "Return of the Jedi" }],
  };
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
