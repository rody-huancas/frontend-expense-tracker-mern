import { Graph } from "./components/Graph";

const App = () => {
  return (
    <div className="app">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">
          Expense Tracker
        </h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Chart */}
          <Graph />

          {/* Form */}
        </div>
      </div>
    </div>
  );
};

export default App;
