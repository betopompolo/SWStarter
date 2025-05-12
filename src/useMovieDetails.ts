import { useQuery } from "@tanstack/react-query";

export type MovieDetails = {
  id: string;
  name: string;
  openingText: string;
  characters: {
    id: string;
    name: string;
  }[];
};

async function getMovieDetails(movieId: string): Promise<MovieDetails> {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  return {
    id: movieId,
    name: "Return of Jedi",
    openingText:
      "Luke Skywalker has returned to\n" +
      "his home planet of Tatooine in\n" +
      "an attempt to rescue his\n" +
      "friend Han Solo from the\n" +
      "clutches of the vile gangster\n" +
      "Jabba the Hutt.\n" +
      "\n" +
      "Little does Luke know that the\n" +
      "GALACTIC EMPIRE has secretly\n" +
      "begun construction on a new\n" +
      "armored space station even\n" +
      "more powerful than the first\n" +
      "dreaded Death Star.\n" +
      "\n" +
      "When completed, this ultimate\n" +
      "weapon will spell certain doom\n" +
      "for the small band of rebels\n" +
      "struggling to restore freedom\n" +
      "to the galaxy...",
    characters: [
      { id: "1", name: "Luke Skywalker" },
      { id: "2", name: "Master Yoda" },
      { id: "3", name: "Jabba Desiliikiic" },
      { id: "4", name: "C-3PO" },
      { id: "5", name: "R2-D2" },
    ],
  };
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
