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
    <div className="group relative flex-1">
      {/* gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className="
          relative
          h-full
          rounded-2xl
          border border-gray-200/60
          bg-white/80
          backdrop-blur-md
          px-8 py-7
          shadow-sm
          transition-all duration-500
          hover:-translate-y-1 hover:shadow-xl
        "
      >
        {/* title */}
        <h1 className="text-center text-2xl font-semibold italic tracking-tight text-gray-900">
          {title}
        </h1>

        {/* content */}
        <div className="mt-8 flex flex-col gap-6">
          {/* execution time */}
          <div className="flex items-center justify-between rounded-xl bg-gray-50 px-5 py-4">
            <span className="text-sm text-gray-500">Execution Time</span>
            <span className="font-mono text-sm font-semibold text-gray-900">
              {executeTime} ms
            </span>
          </div>

          {/* genre */}
          <div className="flex flex-col gap-2">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Predicted Genre
            </span>
            <div
              className="
                rounded-xl
                bg-gradient-to-r from-blue-600 to-indigo-600
                py-3 text-center
                text-lg font-semibold text-white
                shadow-lg shadow-blue-600/30
              "
            >
              {genre}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonCard;
