import { useQuery } from "@tanstack/react-query";

export type SearchType = "movie" | "character";
export type SearchResult = {
  id: string;
  title: string;
  type: SearchType;
};

function searchMovies(query: string): Promise<SearchResult[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "Episode I",
          type: "movie",
        },
      ] as SearchResult[]);
    }, 2000);
  });
}

function searchCharacters(query: string): Promise<SearchResult[]> {
  console.log(`searchCharacters`, query);
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 500);
  });
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
