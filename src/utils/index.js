exports.getTotalMarks = (marks) => {
  let total = 0;
  for(let sub in marks) {
    total += marks[sub];
  }
  return total;
};
