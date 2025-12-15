import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import ConverterForm from "./components/ConverterForm.jsx";
import ResultDisplay from "./components/ResultDisplay.jsx";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("history")) || [];
    setHistory(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <div className="min-h-screen bg-blue-50 flex justify-center p-6">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6">
        <Header />

        <ConverterForm
          setResult={setResult}
          setLoading={setLoading}
          setError={setError}
          setHistory={setHistory}
        />

        <ResultDisplay
          result={result}
          loading={loading}
          error={error}
        />

        {history.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Conversion History
            </h3>
            <ul className="space-y-1 text-sm">
              {history.map((item, index) => (
                <li
                  key={index}
                  className="bg-blue-50 p-2 rounded"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
