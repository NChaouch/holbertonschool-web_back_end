const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // READ FILE in async
    const data = await fs.readFile(path, 'utf8');
    // lines enpty
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    // delete header
    const studentLines = lines.slice(1);
    // calcul of nb total of students
    const totalStudents = studentLines.length;
    console.log(`Number of students: ${totalStudents}`);
    // group students /fields
    const fieldGroups = studentLines.reduce((acc, line) => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        acc[field] = acc[field] || [];
        acc[field].push(firstname);
      }
      return acc;
    }, {});

    // display details / fields
    for (const [field, students] of Object.entries(fieldGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }

    return totalStudents;
  } catch (error) {
    // error if file is not read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
