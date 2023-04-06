import { MovieType } from "@/type";
import {
  ChatBubbleBottomCenterTextIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ReactModal from "react-modal";
import Star from "./Star";

ReactModal.setAppElement("#Card");

export default function Card({ movie }: MovieType) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <div
      id="Card"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
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
        <div>
          <a
            onClick={() => setIsFavorite(!isFavorite)}
            className={`inline-flex items-center px-3 py-2 mr-3 text-sm font-medium text-center text-slate-50 ${
              isFavorite
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-yellow-300 hover:bg-yellow-400"
            } rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            {isFavorite ? (
              <MinusCircleIcon className="w-[20px] h-[20px] mr-2" />
            ) : (
              <PlusCircleIcon className="w-[20px] h-[20px] mr-2" />
            )}
            {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
          </a>
          <a
            onClick={() => setIsModalOpen(!isModalOpen)}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-slate-50 bg-green-500 hover:bg-green-600 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            <ChatBubbleBottomCenterTextIcon className="w-[20px] h-[20px] mr-1" />
            Rate
          </a>
          <ReactModal
            className="bg-slate-100 font-semibold text-xl text-slate-700 w-[50%] h-[50%] mx-auto my-[20px] border-slate-500 flex flex-col justify-center items-center"
            isOpen={isModalOpen}
          >
            <h2>Rate this film</h2>
            <div className="my-4 text-center">
              <ul>
                {[1, 2, 3, 4, 5].map((index: number) => (
                  <li
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(0)}
                    onClick={() => setRating(index)}
                    className="inline-flex"
                    key={`star-${index}`}
                  >
                    <Star yellow={index <= hoverIndex || index <= rating} />
                  </li>
                ))}
              </ul>
              <span className="text-center text-3xl">
                {rating === 1
                  ? "Awful!!"
                  : rating === 2
                  ? "Bad!"
                  : rating === 3
                  ? "Good!"
                  : rating === 4
                  ? "Awesome!!"
                  : rating === 5
                  ? "Perfect!!!"
                  : ""}
              </span>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className={`inline-flex items-center px-3 py-2 my-4 text-sm font-medium text-center text-slate-50 bg-gray-700 hover:bg-gray-800 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-300 shadow-md dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
            >
              Close
            </button>
          </ReactModal>
        </div>
      </div>
    </div>
  );
}
