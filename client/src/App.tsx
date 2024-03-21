import { useQuery } from "@tanstack/react-query";
import { getCourses } from "./api";
import { CourseCard, Header } from "./components";
import { Course } from "./types";

function App() {
  const { data } = useQuery({ queryKey: ["courses"], queryFn: getCourses });
  console.log(data);
  return (
    <div>
      <Header />
      {data?.map((course: Course) => (
        <CourseCard course={course} />
      ))}
      {/* <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Explore Courses</h1>
            <p className="py-6">
              Choose from tons of online video courses with new additions
              published every month
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
