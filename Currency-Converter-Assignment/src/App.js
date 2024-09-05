import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <CurrencyConverter />
    </div>
  );
}

function CurrencyConverter() {
  const [currency, setCurrency] = useState(1);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("EUR");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    console.log("test");
    async function convert() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${currency}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      setAmount(data.rates[toCur]);
    }
    if (fromCur === toCur || currency === 0) {
      setAmount(currency);
      return;
    }

    convert();
  }, [currency, fromCur, toCur]);

  return (
    <div>
      <input
        type="text"
        value={currency}
        onChange={(e) => setCurrency(Number(e.target.value))}
      />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="JPY">JPY</option>
      </select>

      <p>
        {amount} {toCur}
      </p>
    </div>
  );
}
