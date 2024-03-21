import { Route, Routes } from "react-router-dom";
import { CourseListPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" Component={CourseListPage} />
    </Routes>
  );
}

export default App;
