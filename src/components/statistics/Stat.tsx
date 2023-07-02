interface Props {
  name: string;
  color: string;
  percentage: number;
}

const Stat: React.FC<Props> = ({ name, color, percentage }) => (
  <div>
    <div className="flex items-center justify-between">
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-lg font-semibold">{percentage}%</p>
    </div>
    <div className="w-full rounded-[4px] bg-gray-200">
      <div
        className="h-1.5 rounded-[4px]"
        style={{ backgroundColor: color, width: `${percentage}%` }}
      ></div>
    </div>
  </div>
);

export default Stat;
