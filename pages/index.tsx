import Card from "@/components/Card";
import { MovieType, MoviesType } from "@/type";
import { movies } from "@/data.js";

export default function Home({ movies }: MoviesType) {
  return (
    <>
      <div className="container mx-auto mt-44 mb-32">
        <h1 className="text-center text-5xl font-bold text-slate-900">
          Movie App
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 mx-auto">
          {movies.map((movie: MovieType, index: number) => (
            <Card key={`movie-${index}`} movie={movie.movie} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      movies,
    },
  };
}
