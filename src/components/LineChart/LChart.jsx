import { LineChart, Line,XAxis,YAxis } from 'recharts';

const LChart = () => {
  const mathMarks = [
    { "id": 1, "name": "John", "mark": 75,"physics":89 },
    { "id": 2, "name": "Sarah", "mark": 82,"physics":96 },
    { "id": 3, "name": "Michael", "mark": 90,"physics":60 },
    { "id": 4, "name": "Emily", "mark": 68,"physics":89 },
    { "id": 5, "name": "David", "mark": 95,"physics":99 },
    { "id": 6, "name": "Olivia", "mark": 78,"physics":83 },
    { "id": 7, "name": "Sophia", "mark": 88,"physics":78 },
    { "id": 8, "name": "Matthew", "mark": 72,"physics":68 },
    { "id": 9, "name": "Ella", "mark": 87,"physics":98 },
    { "id": 10, "name": "Daniel", "mark": 79,"physics":60 }
  ]
  

  return (
    <div>
      <h1 className="text-4xl">this is lcahrt</h1>
      <XAxis dataKey="name"/>
      <YAxis dataKey={"name"}></YAxis>
      <LineChart width={500} height={400} data={mathMarks}>
        <Line dataKey={"mark"} stroke='red'></Line>
        <Line dataKey={"physics"} stroke='green'></Line>
      </LineChart>
    </div>
  );
};

export default LChart;