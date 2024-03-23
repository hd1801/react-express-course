import { Route, Routes } from "react-router-dom";
import { CourseDetailsPage, CourseListPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" Component={CourseListPage} />
      <Route path="course/:courseId" Component={CourseDetailsPage} />
    </Routes>
  );
}

export default App;
