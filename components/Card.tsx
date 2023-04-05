import { MovieType } from "@/type";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Card({ movie }: MovieType) {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="overflow-hidden">
        <img
          src="/1.jpg"
          alt="pic"
          className="w-full h-[300px] object-cover transition-all hover:scale-125 ease-in-out"
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {movie.title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {movie.description}
        </p>
        <a
          onClick={() => setIsFavorite(!isFavorite)}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-50 ${
            isFavorite
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-yellow-300 hover:bg-yellow-400"
          } rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          <StarIcon className="w-[20px] h-[20px] mr-2" />
          {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
        </a>
      </div>
    </div>
  );
}
