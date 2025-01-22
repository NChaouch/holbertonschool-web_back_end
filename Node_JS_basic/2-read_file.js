const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').trim();

    if (!data) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n');
    const rows = lines.slice(1);

    if (rows.length === 0) {
      throw new Error('Cannot load the database');
    }

    const fieldData = {};
    let totalStudents = 0;

    rows.forEach((line) => {
      const columns = line.split(',');

      if (columns.length >= 2) {
        const firstName = columns[0].trim();
        const field = columns[columns.length - 1].trim();

        if (!fieldData[field]) {
          fieldData[field] = [];
        }

        fieldData[field].push(firstName);
        totalStudents += 1;
      }
    });

    console.log(`Number of students: ${totalStudents}`);

    Object.entries(fieldData).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}.List: ${students.join(', ')}`);
    });
  } catch (error) {
    console.error('Cannot load the database');
    throw error;
  }
}

module.exports = countStudents;
