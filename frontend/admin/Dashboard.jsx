import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

export default function Dashboard() {
  const data = {
    labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
    datasets: [
      {
        label: "Doanh thu (triệu VND)",
        data: [12, 19, 8, 15],
        backgroundColor: "rgba(59,130,246,0.7)",
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card title="Tổng sản phẩm" value="128" />
        <Card title="Tổng đơn hàng" value="54" />
        <Card title="Doanh thu" value="39.2M" />
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-medium mb-3">Biểu đồ doanh thu</h2>
        <Bar data={data} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 text-center">
      <p className="text-gray-600">{title}</p>
      <p className="text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}
