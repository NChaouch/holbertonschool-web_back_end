function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city) // take only students with location
    .map((student) => {
      const gradObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradObj ? gradObj.grade : 'N/A',
      };
    });
}

module.exports = updateStudentGradeByCity;
