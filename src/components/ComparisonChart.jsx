import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ComparisonChart = ({ category, cities }) => {
  const data = cities.map(city => ({
    name: city.name,
    score: city.categories[category.id].score,
    description: city.categories[category.id].description
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{label}</p>
          <p className="text-japan-red font-bold">Score: {data.score}/10</p>
          <p className="text-sm text-gray-600 max-w-xs">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-ink">{category.name}</h3>
          <p className="text-sm text-gray-600">{category.description}</p>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 12 }}
              stroke="#666"
            />
            <YAxis 
              domain={[0, 10]}
              tick={{ fontSize: 12 }}
              stroke="#666"
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="score" 
              fill="#DC2626"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComparisonChart;
