import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ComparisonChart = ({ category, cities }) => {
  const data = cities.map((city, index) => ({
    name: city.name,
    score: city.categories[category.id].score,
    description: city.categories[category.id].description,
    color: index === 0 ? '#DC2626' : index === 1 ? '#EA580C' : '#059669'
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="japanese-card p-4 max-w-xs">
          <div className="flex items-center space-x-2 mb-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: data.color }}
            ></div>
            <p className="font-semibold text-ink">{label}</p>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-2xl">{category.icon}</span>
            <span className="text-xl font-bold gradient-text">{data.score}/10</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{data.description}</p>
        </div>
      );
    }
    return null;
  };

  const CustomBar = (props) => {
    const { fill, ...rest } = props;
    return (
      <Bar 
        {...rest} 
        fill="url(#gradient)" 
        radius={[6, 6, 0, 0]}
        className="hover:opacity-80 transition-opacity duration-200"
      />
    );
  };

  return (
    <div className="japanese-card p-8 h-full">
      {/* Header */}
      <div className="flex items-start space-x-4 mb-8">
        <div className="p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <span className="text-3xl">{category.icon}</span>
        </div>
        <div className="flex-1">
          <h3 className="japanese-heading text-xl font-bold text-ink mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {category.description}
          </p>
        </div>
      </div>
      
      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="25%"
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#f0f0f0" 
              vertical={false}
            />
            
            <XAxis 
              dataKey="name" 
              tick={{ fontSize: 13, fontWeight: 500 }}
              stroke="#6B7280"
              tickLine={false}
              axisLine={false}
            />
            
            <YAxis 
              domain={[0, 10]}
              tick={{ fontSize: 12 }}
              stroke="#6B7280"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(220, 38, 38, 0.05)' }} />
            
            <Bar dataKey="score" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* Score summary */}
      <div className="mt-6 pt-6 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          {data.map((city, index) => (
            <div key={city.name} className="text-center">
              <div className="text-lg font-bold" style={{ color: city.color }}>
                {city.score}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {city.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;
