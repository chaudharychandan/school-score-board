import React from 'react';

import { getTotalMarks } from 'utils';

import './Marksheet.css';

const MarkSheet = ({ data }) => {
  const { name, marks, rollNo } = data;
  const studentClass = data.class;

  const renderEachSubject = (subs) => {
    const rows = []
    for (let sub in subs) {
      rows.push(
        <tr key={sub}>
          <td>{sub}</td>
          <td>{subs[sub]}</td>
        </tr>
      )
    }
    return rows;
  }

  return (
    <div className="marksheet-container">
      <table className="marksheet">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Class</td>
            <td>{studentClass}</td>
          </tr>
          <tr>
            <td>Roll No</td>
            <td>{rollNo}</td>
          </tr>
            {renderEachSubject(marks)}
          <tr>
            <td>Total</td>
            <td>{getTotalMarks(marks)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MarkSheet;
