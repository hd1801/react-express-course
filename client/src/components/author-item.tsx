import { Author } from "../types";
import { getFileUrl } from "../utils";

export const AuthorDetails = ({ author }: { author: Author }) => {
  return (
    <div className="flex bg-base-100 rounded-xl p-4">
      <div className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-2xl font-bold">About the instructor</h2>
        <div className="flex gap-2 items-center">
          <img
            src={getFileUrl(author.avatar?.name)}
            alt="Instructor"
            className="rounded-full object-cover border w-12 h-12 border-gray-200 dark:border-gray-800"
          />
          <div className="grid">
            <h2 className="text-lg font-bold">{author.name}</h2>
            <p className="text-sm opacity-75">Instructor</p>
          </div>
        </div>
        <p className="text-md opacity-70">{author.description}</p>
      </div>
    </div>
  );
};
