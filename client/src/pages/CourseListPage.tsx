import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../api";
import { CourseCard } from "../components";

export const CourseListPage = () => {
  const { data } = useQuery({ queryKey: ["courses"], queryFn: getCourses });
  console.log(data);
  return (
    <div className="w-full h-full p-4 max-w-[1920px] mx-auto px-2 sm:px-5 md:px-12 lg:px-24 bg-base-200">
      <h1 className="text-5xl font-black">Courses</h1>
      <p className="text-lg font-semibold">
        Equip yourself to thrive in a tech-centric world, offering limitless
        opportunities for problem-solving and innovation.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data?.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
