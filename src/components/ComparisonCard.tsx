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
    <div
      className="
        bg-white
        rounded-3xl
        p-8
        w-full
        shadow-[0_20px_40px_rgba(0,0,0,0.12)]
      "
    >
      {/* Title */}
      <p className="text-blue-600 font-semibold text-sm tracking-wide">
        {title}
      </p>

      {/* Price */}
      <div className="mt-4 flex items-end gap-2">
        <span className="text-5xl font-bold text-gray-900">{genre}</span>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">
        Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur
        adipisci vitae.
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-3">
        {[
          "45 menit",
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
            <span className="text-indigo-500 text-xl">🕛</span>
            {item}
          </li>
        ))}
      </ul>

    </div>
    // <div className="bg-white px-9 py-4 flex-1">
    //   <h1 className="italic text-center font-bold text-[28px]">{title}</h1>
    //   <div className="flex flex-col flex-start mt-8 gap-4">
    //     <p className="font-['Inter'] font-medium text-[16px]">Execution Time: {executeTime}</p>
    //     <div className="bg-gray-300 text-black text-center py-3 text-[1.2rem] font-semibold">{genre}</div>
    //   </div>
    // </div>
  );
};

export default ComparisonCard;
