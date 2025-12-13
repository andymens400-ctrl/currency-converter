import { useState } from "react";

export default function ConverterForm({ setResult, setLoading, setError }) {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("GHS");

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setResult(`${amount} ${from} → ${to}`);
      setLoading(false);
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "12px" }}>
        <label>Amount</label><br />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>From</label><br />
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option>USD</option>
          <option>GHS</option>
          <option>EUR</option>
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>To</label><br />
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>GHS</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
      </div>

      <button type="submit">Convert</button>
    </form>
  );
}
