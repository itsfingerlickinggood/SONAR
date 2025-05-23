import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "AI", value: 12 },
  { name: "Web3", value: 8 },
  { name: "Cloud", value: 15 },
  { name: "Robotics", value: 6 },
];

// Recharts visual
export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#6366f1" />
      </BarChart>
    </ResponsiveContainer>
  );
}
