import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { Env } from "@app/Env";

export const MovieDetailsScheme = z.object({
  id: z.string(),
  name: z.string(),
  openingCrawl: z.string(),
  characters: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
});
export type MovieDetails = z.infer<typeof MovieDetailsScheme>;

async function getMovieDetails(movieId: string): Promise<MovieDetails> {
  const url = new URL("getMovieDetails", Env.EXPO_PUBLIC_SERVER_URL);
  url.searchParams.set("movieId", movieId);
  const json = await fetch(url.toString()).then((res) => res.json());

  return MovieDetailsScheme.parse(json);
}

export const useMovieDetails = (movieId: string) => {
  const { data, isLoading } = useQuery({
    queryFn: () => getMovieDetails(movieId),
    queryKey: ["getMovieDetails", movieId],
  });

  return {
    movieDetails: data,
    isMovieDetailsLoading: isLoading,
  };
};
