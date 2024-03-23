import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteCourse, getCourseById } from "../api";
import { AuthorItem, PageWrapper } from "../components";
import { getFileUrl } from "../utils/uploads.util";

export function CourseDetailsPage() {
  const params = useParams();
  const { data: course } = useQuery({
    queryKey: ["courses", params.courseId],
    queryFn: () => getCourseById(params.courseId),
  });
  const deleteMutation = useMutation({ mutationFn: deleteCourse });
  const handleDelete = () => {
    deleteMutation.mutate(params.courseId, {
      onSuccess: () => {
        window.location.href = "/";
      },
    });
  };
  console.log("🚀 ~ CourseDetailsPage ~ course:", course);
  return (
    <PageWrapper>
      <div className="text-sm breadcrumbs py-5">
        <ul>
          <li>
            <a>Courses</a>
          </li>
          <li>
            <a>{course?.title}</a>
          </li>
        </ul>
      </div>
      <div className="">
        <h2 className="text-4xl font-bold">{course?.title}</h2>
        <img
          className="bg-accent h-56"
          src={getFileUrl(course?.thumbnail?.name)}
        />
        <p>{course?.description}</p>
      </div>
      {course?.author && (
        <div className="grid gap-8">
          <h2 className="text-4xl font-bold">About the author</h2>
          <AuthorItem author={course?.author} />
          <p>{course?.author?.description}</p>
        </div>
      )}
      <button onClick={handleDelete} className="btn btn-error">
        Delete course
      </button>
    </PageWrapper>
  );
}
