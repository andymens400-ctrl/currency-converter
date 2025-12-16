import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function ResultDisplay({ result, loading, error }) {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Results :</h3>

      <div className="bg-gray-200 rounded-lg p-3 min-h-11 flex items-center">
        {result ? (
          <span className="text-lg font-medium">
            {result.amount} {result.from} ={" "}
            {result.converted.toFixed(2)} {result.to}
          </span>
        ) : (
          <span className="text-gray-500">=</span>
        )}
      </div>
    </div>
  );
}
