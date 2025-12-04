export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded-xl w-full max-w-md">
      {message}
    </div>
  );
}
