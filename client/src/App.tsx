import { Header } from "./components";

function App() {
  return (
    <div>
      <Header />
      <div className="hero bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Explore Courses</h1>
            <p className="py-6">
              Choose from tons of online video courses with new additions
              published every month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
