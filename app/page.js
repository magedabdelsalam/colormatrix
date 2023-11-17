"use client"

import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);

  const addRow = () => {
    setRows((prevRows) => prevRows + 1);
  }

  const addColumn = () => {
    setColumns((prevColumns) => prevColumns + 1);
  }

  return (
    <div>
      <button onClick={addRow}>Add Row</button>
      <button onClick={addColumn}>Add Column</button>
      <table>
        <tbody>
          {[...Array(rows)].map((rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(columns)].map((colIndex) => (
                <td key={colIndex}>
                  <input type="text" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
