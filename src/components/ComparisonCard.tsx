"use client";

const ComparisonCard = ({
  title,
  genre,
  executeTime,
}: {
  title: string;
  genre: string;
  executeTime: string | number;
}) => {
  return (
    <div className="bg-white px-9 py-4 flex-1">
      <h1 className="italic text-center font-bold text-[28px]">{title}</h1>
      <div className="flex flex-col flex-start mt-8 gap-4">
        <p className="font-['Inter'] font-medium text-[16px]">Execution Time: {executeTime}</p>
        <div className="bg-gray-300 text-black text-center py-3 text-[1.2rem] font-semibold">{genre}</div>
      </div>
    </div>
  );
};

export default ComparisonCard;
