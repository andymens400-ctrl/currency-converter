import { useState } from "react";
import Header from "./components/Header.jsx";
import ConverterForm from "./components/ConverterForm.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <Header />

      <ConverterForm
        setResult={setResult}
        setLoading={setLoading}
        setError={setError}
      />

      <ResultDisplay
        result={result}
        loading={loading}
        error={error}
      />
    </div>
  );
}
