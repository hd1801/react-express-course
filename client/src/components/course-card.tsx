import moment from "moment";
import { Course } from "../types";

interface CourseCardProps {
  course: Course;
}
export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="w-full h-full rounded-3xl p-4 shadow-lg bg-base-100 flex flex-col gap-5 ">
      <figure>
        <img
          className="w-full h-52 aspect-video rounded-2xl object-cover"
          src={course.thumbnail.url}
          alt="Album"
        />
      </figure>
      <div className="flex flex-col gap-2 pr-4 leading-[185%] ">
        <h2 className="text-[1.45rem] font-black">{course.title}</h2>
        <p className="opacity-75">
          By <span className="italic font-semibold">{course.author.name}</span>
        </p>
      </div>
      <div className="flex flex-1 flex-row card-actions items-center justify-between">
        <p className="text-sm opacity-75">
          {moment(course.created_at).format("ll")}
        </p>
        <button className="btn btn-outline">Show more</button>
      </div>
    </div>
  );
}
