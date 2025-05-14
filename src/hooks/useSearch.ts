import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { Env } from "@app/Env";

export const SearchResultScheme = z.object({
  id: z.string(),
  name: z.string(),
  type: z.union([z.literal("movie"), z.literal("character")]),
});
export type SearchResult = z.infer<typeof SearchResultScheme>;
export type SearchType = SearchResult["type"];

export const SearchResultsScheme = z.array(SearchResultScheme);
export type SearchResults = z.infer<typeof SearchResultsScheme>;

async function searchMovies(query: string): Promise<SearchResults> {
  const url = new URL("searchMovies", Env.EXPO_PUBLIC_SERVER_URL);
  url.searchParams.set("query", query);
  const json = await fetch(url.toString()).then((res) => res.json());

  return SearchResultsScheme.parse(json);
}

async function searchCharacters(query: string): Promise<SearchResults> {
  const url = new URL("searchCharacters", Env.EXPO_PUBLIC_SERVER_URL);
  url.searchParams.set("query", query);
  const json = await fetch(url.toString()).then((res) => res.json());
  return SearchResultsScheme.parse(json);
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
