import { Author } from "../types";
import { getFileUrl } from "../utils";

export const AuthorItem = ({ author }: { author: Author }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img
        className="rounded-full h-24 w-24"
        src={getFileUrl(author.avatar.name)}
        alt={author.name}
      />
      <h3 className="text-lg font-bold">{author.name}</h3>
    </div>
  );
};
