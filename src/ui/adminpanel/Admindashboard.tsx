import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./admincss/Admindashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

const Admindashboard = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue",
        data: [15, 10, 5, 2, 20, 30],
        fill: false,
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        borderColor: "rgba(153, 102, 255, 1)",
      },
    ],
  };

  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        color: "white",
        padding: "20px",
        marginTop: "60px",
        overflowX: "auto",
        overflowY: "auto",
      }}
    >
      <h2 className="text-3xl text-blue-500">Line Chart</h2>
      <div
        className="shine-effect"
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",

          height: "auto",
          marginBottom: "20px",
        }}
      >
        <Bar data={barData} options={{ responsive: true }} />
      </div>
      <hr className="solid 3px blue" />

      <h2 className="text-3xl text-blue-500">Line Chart</h2>
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          marginBottom: "20px",
        }}
        className="shine-effect"
      >
        <Line data={lineData} options={{ responsive: true }} />
      </div>
      <hr className="solid" />

      <h2 className="text-3xl text-blue-500">Pie Chart</h2>
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "auto",
          margin: "0 auto",
          marginBottom: "20px",
        }}
        className="shine-effect"
      >
        <Pie data={pieData} options={{ responsive: true }} />
      </div>
      <hr className="solid" />
    </div>
  );
};

export default Admindashboard;
