import { useQuery } from "@tanstack/react-query";
import _ from "lodash";
import { getCourses } from "../api";
import { CourseCard, PageWrapper } from "../components";

export const CourseListPage = () => {
  const { data } = useQuery({ queryKey: ["courses"], queryFn: getCourses });
  return (
    <PageWrapper>
      <div>
        <h1 className="text-4xl font-bold">Courses</h1>
        <p className="text-lg font-semibold">
          Equip yourself to thrive in a tech-centric world, offering limitless
          opportunities for problem-solving and innovation.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {_.map(data, (course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </PageWrapper>
  );
};
