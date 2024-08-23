import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function hanndleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // console.log(e);
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={hanndleSubmit}>
      <div>
        <h3>😋 What do you need for your 😍 trip</h3>
      </div>
      <div className="form-input">
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
