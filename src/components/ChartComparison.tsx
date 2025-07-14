import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { ChartDataPoint, ChartConfiguration } from '../types';

interface ChartComparisonProps {
  data: ChartDataPoint[];
  config: ChartConfiguration;
  title?: string;
  subtitle?: string;
  onDataPointClick?: (dataPoint: ChartDataPoint) => void;
  className?: string;
}

const ChartComparison: React.FC<ChartComparisonProps> = ({
  data,
  config,
  title,
  subtitle,
  onDataPointClick,
  className = ''
}) => {
  const handleBarClick = (data: any) => {
    if (onDataPointClick) {
      const chartDataPoint = data as ChartDataPoint;
      onDataPointClick(chartDataPoint);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-charcoal-gray">{label}</p>
          <p className="text-sm text-gray-600">{data.label}</p>
          <p className="text-sm font-medium">
            <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: data.color }} />
            Score: {data.value}/10
          </p>
          {data.metadata?.isWinner && (
            <p className="text-xs text-gold font-medium mt-1">🏆 Winner</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`chart-container ${className}`}>
      {title && (
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-charcoal-gray">{title}</h3>
          {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
        </div>
      )}
      
      <div style={{ width: '100%', height: config.height }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {config.grid.show && (
              <CartesianGrid 
                strokeDasharray={config.grid.strokeDasharray || "3 3"} 
                stroke="#e5e7eb"
              />
            )}
            
            {config.axes.x.show && (
              <XAxis 
                dataKey="city"
                stroke="#6b7280"
                fontSize={12}
                fontFamily="Inter, sans-serif"
              />
            )}
            
            {config.axes.y.show && (
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                fontFamily="Inter, sans-serif"
                domain={config.axes.y.domain || [0, 'dataMax']}
              />
            )}
            
            {config.tooltip.show && (
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              />
            )}
            
            <Bar 
              dataKey="value" 
              fill="#8884d8"
              radius={[4, 4, 0, 0]}
              onClick={handleBarClick}
              style={{ cursor: onDataPointClick ? 'pointer' : 'default' }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComparison;