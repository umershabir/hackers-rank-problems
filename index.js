function gradingStudents(grades) {
  let grading = grades.map((item) => {
    if (item < 38) {
      return item;
    } else if (item % 5 < 3) {
      return item;
    } else {
      let reminder = item % 5;
      let toAdd = 5 - reminder;
      return item + toAdd;
    }
  });
  return console.log(grading);
}

gradingStudents([73, 67, 38, 33]);
