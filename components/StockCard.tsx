type StockData = {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
};

export default function StockCard({
  stock,
}: {
  stock: StockData;
}) {
  return (
    <div className="mt-10 rounded-xl border border-gray-300 bg-white p-6 shadow-lg text-gray-900">

      <h2 className="mb-6 text-2xl font-bold text-blue-600">
        📈 Live Market Data
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">Current Price</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900">${stock.c}</h3>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">Today's Change</p>
          <h3
            className={`mt-2 text-2xl font-bold ${
              stock.d >= 0 ? "text-green-700" : "text-red-700"
            }`}
          >
            {stock.d} ({stock.dp}%)
          </h3>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">High</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">${stock.h}</h3>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">Low</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">${stock.l}</h3>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">Open</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">${stock.o}</h3>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-600">Previous Close</p>
          <h3 className="mt-2 text-xl font-bold text-gray-900">${stock.pc}</h3>
        </div>

      </div>

    </div>
  );
}