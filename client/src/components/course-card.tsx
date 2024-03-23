import moment from "moment";
import { Link } from "react-router-dom";
import { Course } from "../types";
import { getFileUrl } from "../utils/uploads.util";

interface CourseCardProps {
  course: Course;
}
export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="w-full h-full rounded-xl p-4 bg-base-100 flex flex-col gap-5 shadow-md hover:shadow-lg  transition duration-100 ease-in-out transform hover:-translate-y-1 hover:scale-102">
      <figure>
        <img
          className="w-full h-52 aspect-video rounded-2xl object-cover"
          src={getFileUrl(course.thumbnail?.name)}
          alt={course.title}
        />
      </figure>
      <div className="flex flex-col gap-2 pr-4 leading-[185%] ">
        <h2 className="text-[1.45rem] font-black">{course.title}</h2>
        <p className="opacity-75">
          By <span className="italic font-semibold">{course.author?.name}</span>
        </p>
      </div>
      <div className="flex flex-1 flex-row card-actions items-center justify-between">
        <p className="text-sm opacity-75">
          {moment(course.created_at).format("ll")}
        </p>
        <Link to={`/course/${course.id}`}>
          <button className="btn btn-outline">Show more</button>
        </Link>
      </div>
    </div>
  );
}
