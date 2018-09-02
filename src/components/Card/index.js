import React from 'react';
import { getTotalMarks } from 'utils';

import './Card.css';

const Card = ({ card }) => {
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
