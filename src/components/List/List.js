import React from "react";
import { XCircle } from "react-feather";

export default function List({ items, handleDelete }) {
  return (
    <ul className="daily-info-list">
      {items.map((item, index) => {
        return (
          <li key={index} className="list-item">
            {item}{" "}
            <button
              className="list-item-delete-button"
              onClick={() => handleDelete(index)}
            >
              <XCircle className="list-item-delete-button-icon" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}
