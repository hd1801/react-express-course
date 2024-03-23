import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { deleteCourse, getCourseById } from "../api";
import { AuthorDetails, PageWrapper } from "../components";
import { getFileUrl } from "../utils";

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
  const goBack = () => {
    window.history.back();
  };
  return (
    <PageWrapper>
      <div className="py-12 w-full h-full flex flex-col items-center gap-6 max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold leading-tight">{course?.title}</h1>
        </div>
        <div className="grid grid-cols-6 w-full h-full gap-4">
          <div className="w-full col-span-6 min-h-32 sm:col-span-4 flex flex-col gap-4">
            <h5 className="opacity-75 text-2xl font-bold">
              Course Description
            </h5>
            <p className="max-w-2xl">{course?.description}</p>
          </div>
          <div className="w-full col-span-6 sm:col-span-2">
            <img
              className="w-full rounded-lg aspect-video"
              src={getFileUrl(course?.thumbnail?.name)}
            />
          </div>
        </div>
        {!!course?.author && <AuthorDetails author={course?.author} />}
        <div className="flex gap-4">
          <button onClick={goBack} className="btn btn-outline">
            Go back
          </button>
          <button onClick={handleDelete} className="btn btn-error">
            Delete course
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
