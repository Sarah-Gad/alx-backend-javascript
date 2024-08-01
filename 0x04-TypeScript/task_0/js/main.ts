interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
let student1:Student = {
  firstName: "farah",
  lastName: "Mohamed",
  age: 12,
  location: "egypt"
}

let student2:Student = {
  firstName: "Ehdaa",
  lastName: "nabil",
  age: 14,
  location: "egypt"
}

const studentsList: Student[] = [student1, student2]

function renderStudentTable() {
  // Create a table element
  const table = document.createElement('table');

  // Create table headers
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headerFirstName = document.createElement('th');
  headerFirstName.textContent = 'First Name';
  const headerLocation = document.createElement('th');
  headerLocation.textContent = 'Location';
  headerRow.appendChild(headerFirstName);
  headerRow.appendChild(headerLocation);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement('tbody');
  studentsList.forEach(student => {
    const row = document.createElement('tr');
    const cellFirstName = document.createElement('td');
    cellFirstName.textContent = student.firstName;
    const cellLocation = document.createElement('td');
    cellLocation.textContent = student.location;
    row.appendChild(cellFirstName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  // Append the table to the document body
  document.body.appendChild(table);
}

// Call the function to render the table
renderStudentTable();
