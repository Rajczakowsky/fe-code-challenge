import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface LazyLineChartProps {
  data: { time: string; price: number }[];
}

const LazyLineChart = ({ data }: LazyLineChartProps) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
        <XAxis dataKey="time" />
        <YAxis />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LazyLineChart;
