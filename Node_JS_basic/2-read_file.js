const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const header = lines[0].split(',');
    const rows = lines.slice(1);
    const fieldCounts = {};
    let totalStudents = 0;

    rows.forEach((row) => {
      const values = row.split(',');

      if (values.length === header.length) {
        const field = values[values.length - 1].trim();
        const firstName = values[0].trim();

        if (!fieldCounts[field]) {
          fieldCounts[field] = [];
        }

        fieldCounts[field].push(firstName);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
