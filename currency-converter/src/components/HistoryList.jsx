export default function HistoryList({ history }) {
  if (!history.length) return null;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Conversion History</h3>

      <ul className="space-y-2">
        {history.map((item, index) => (
          <li
            key={index}
            className="bg-white border rounded-lg p-3 text-sm"
          >
            {item.amount} {item.from} ={" "}
            <span className="font-medium">
              {item.converted.toFixed(2)} {item.to}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
