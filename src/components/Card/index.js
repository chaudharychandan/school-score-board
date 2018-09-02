import React from 'react';

import './Card.css';

const Card = ({ card }) => {
  const getTotalMarks = (marks) => {
    let total = 0;
    for(let sub in marks) {
      total += marks[sub];
    }
    return total;
  }

  const { name, marks, rollNo } = card;
  return (
    <section className="card">
      <div>
        <span>Name</span><span>{name}</span>
      </div>
      <div>
        <span>Roll No</span><span>{rollNo}</span>
      </div>
      <div>
        <span>Total Marks</span><span>{getTotalMarks(marks)}</span>
      </div>
    </section>
  );
};

export default Card;
