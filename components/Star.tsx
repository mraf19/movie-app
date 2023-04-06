import { StarIcon } from "@heroicons/react/24/solid";

type StarProps = {
  yellow: boolean;
};
export default function Star({ yellow }: StarProps) {
  return (
    <StarIcon
      className={`w-[50px] h-[50px] mr-[4px] ${
        yellow ? "fill-yellow-300" : ""
      }`}
    />
  );
}
