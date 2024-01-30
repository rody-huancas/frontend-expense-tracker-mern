import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10,
      },
    ],
  },
  options: {
    cutout: 115,
  },
};

export const Graph = () => {
  return (
    <>
      <div className="flex justify-center max-w-xs mx-auto">
        <div className="item">
          <div className="chart relative">
            <Doughnut {...config} />
            <h3 className="mb-4 font-bold title">
              Total:
              <span className="block text-3xl text-emerald-400">${0}</span>
            </h3>
          </div>

          <div className="flex flex-col py-10 gap-5">{/* Labels */}</div>
        </div>
      </div>
    </>
  );
};
