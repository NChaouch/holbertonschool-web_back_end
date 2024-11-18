function getListStudentIds(array) {
  if (array == null) {
    return [];
  }
  return array.map((student) => student.id);
}
const students = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 5, name: 'Joe' },
];

console.log(getListStudentIds(null));
console.log(getListStudentIds(students));

module.exports = getListStudentIds;
