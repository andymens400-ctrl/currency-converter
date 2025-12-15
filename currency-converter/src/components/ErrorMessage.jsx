export default function ErrorMessage({ message }) {
  return (
    <p className="text-center mt-6 text-red-600 font-medium">
      {message}
    </p>
  );
}
