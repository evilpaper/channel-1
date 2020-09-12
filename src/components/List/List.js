import React from "react";

export default function List({ items, handleDelete }) {
  return (
    <ul className="daily-info-list">
      {items.map((item, index) => {
        return (
          <li key={index}>
            {item} <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
