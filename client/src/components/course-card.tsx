import { Course } from "../types";

interface CourseCardProps {
  course: Course;
}
export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="card w-96 glass">
      <figure>
        <img src={course.thumbnail.url} alt="course" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>
        <p className="truncate line-clamp-3">{course.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Show details!</button>
        </div>
      </div>
    </div>
  );
}
