import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

export default function ResultDisplay({ result, loading, error }) {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!result) return null;

  return (
    <div className="mt-8 grid grid-cols-3 gap-4 items-center">
      <p className="font-medium">Results :</p>
      <div className="col-span-2 bg-gray-200 rounded-md p-2">
        {result.amount} {result.from} ={" "}
        <strong>{result.converted} {result.to}</strong>
      </div>
    </div>
  );
}
