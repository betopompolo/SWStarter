import { useQuery } from "@tanstack/react-query";

export type SearchType = "movie" | "character";
export type SearchResult = {
  id: string;
  title: string;
  type: SearchType;
};

async function searchMovies(query: string): Promise<SearchResult[]> {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return [
    {
      id: "123",
      type: "movie",
      title: "Return of the Jedi",
    },
  ];
}

async function searchCharacters(query: string): Promise<SearchResult[]> {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  return [
    {
      id: "1",
      type: "character",
      title: "Obi-Wan",
    },
    {
      id: "2",
      type: "character",
      title: "Master Yoda",
    },
    {
      id: "3",
      type: "character",
      title: "Darth Vader",
    },
  ];
}

type UseSearchProps = {
  query: string;
  type: SearchType;
};

export function useSearch({ query, type }: UseSearchProps) {
  const { data: movies, isLoading: areMoviesLoading } = useQuery({
    queryFn: () => searchMovies(query),
    queryKey: [type, query, "searchMovies"],
    enabled: type === "movie",
  });
  const { data: characters, isLoading: areCharactersLoading } = useQuery({
    queryFn: () => searchCharacters(query),
    queryKey: [type, query, "searchCharacters"],
    enabled: type === "character",
  });

  return {
    results: movies ?? characters ?? [],
    isSearching: areMoviesLoading || areCharactersLoading,
  };
}
