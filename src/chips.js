import React from "react";

export default function Chips({ items }) {
  return (
    <div>
      {items.map((d) => (
        <span className="chipsStyle">{d.title}</span>
      ))}
    </div>
  );
}
