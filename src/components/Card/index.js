import React from 'react';
import { Link } from 'react-router-dom';

import { getTotalMarks } from 'utils';

import './Card.css';

const Card = ({ card }) => {
  const { name, marks, rollNo } = card;
  return (
    <Link to={`/${rollNo}`} className="card-link">
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
    </Link>
  );
};

export default Card;
