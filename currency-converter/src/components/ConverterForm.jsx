import { useEffect, useState } from "react";

const API_KEY = "ef0619fb464177f49da7a4f2";

export default function ConverterForm({
  setResult,
  setLoading,
  setError,
  setHistory,
}) {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("GHS");
  const [currencies, setCurrencies] = useState([]);

  // Fetch available currencies once
  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const res = await fetch(
          `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );
        const data = await res.json();

        if (!data.conversion_rates) {
          throw new Error("Invalid API response");
        }

        setCurrencies(Object.keys(data.conversion_rates));
      } catch (error) {
        setError("Failed to load currency list");
      }
    }

    fetchCurrencies();
  }, [setError]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`
      );
      const data = await res.json();

      if (!data.conversion_rates) {
        throw new Error("Invalid API response");
      }

      const rate = data.conversion_rates?.[to];
      if (!rate) {
        throw new Error("Invalid currency selected");
      }

      const converted = Number(amount) * rate;

      const resultData = {
        amount,
        from,
        to,
        converted,
      };

      setResult(resultData);
      setHistory((prev) => [resultData, ...prev]);
    } catch (error) {
      setError("Conversion failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-blue-700">
          Amount
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          className="w-full border rounded-lg p-2 mt-1"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-blue-700">
            From
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700">
            To
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1"
          >
            {currencies.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Convert
      </button>
    </form>
  );
}
