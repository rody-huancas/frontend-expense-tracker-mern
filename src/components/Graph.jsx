import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Labels } from "./Labels";
import { chart_Data, getTotal } from "../helpers/helper";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

export const Graph = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)} />;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <>
      <div className="flex justify-center max-w-xs mx-auto">
        <div className="item">
          <div className="chart relative">
            {graphData}
            <h3 className="mb-4 font-bold title">
              Total:
              <span className="block text-3xl text-emerald-400">
                ${getTotal(data) ?? 0}
              </span>
            </h3>
          </div>

          <div className="flex flex-col py-10 gap-5">
            {/* Labels */}
            <Labels />
          </div>
        </div>
      </div>
    </>
  );
};
