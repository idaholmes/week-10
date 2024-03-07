// Function to add new row to the table
function addRow(name, age, favColor) {
  // locatoe table in the DOM
  var table = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  // set up new row
  var newRow = table.insertRow(table.rows.length);
  // insert new cells
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  // define data for new cells
  cell1.innerHTML = name;
  cell2.innerHTML = age;
  cell3.innerHTML = favColor;
}

// Event listener for form submission
document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var favColor = document.getElementById("fav-color").value;
    addRow(name, age, favColor);
    // Clear the form fields after submission
    document.getElementById("dataForm").reset();
  });
