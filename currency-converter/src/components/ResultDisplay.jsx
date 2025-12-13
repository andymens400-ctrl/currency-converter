export default function ResultDisplay({ result, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!result) return null;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Result</h3>
      <p>{result}</p>
    </div>
  );
}
