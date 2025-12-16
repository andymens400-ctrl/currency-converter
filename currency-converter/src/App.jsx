import { useState } from "react";
import Header from "./components/Header";
import ConverterForm from "./components/ConverterForm";
import ResultDisplay from "./components/ResultDisplay";
import HistoryList from "./components/HistoryList"; 

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-white">
      <Header />

      <div className="w-full max-w-xl bg-blue-50 p-6 rounded-2xl shadow-lg mt-6">
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

        <HistoryList history={history} /> 
      </div>
    </div>
  );
}
