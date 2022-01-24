
// User variables
var users = [];
var newUser;
var numberOfUsers;
var editUser = false;

//Table variables
var table;
var data; 
var thead;
var row;
var rIndex;

// Buttons
var myButton = document.getElementById('but');
var sortNameButton = document.getElementById('sortNameBut');
var sortAgeButton = document.getElementById('sortAgeBut');
var sortEmailButton = document.getElementById('sortEmailBut');

// Text variables
var averageAge = 0;
var sortingText = document.getElementById("whichSort");

// Person constructor
function Person(name, email, age){
	this.Name = name;
	this.Email = email;
	this.Age = age;
}

// Sort Users
var sortNameClicked = false;
var sortEmailClicked = false;
var sortAgeClicked = false;

// Add User Button
myButton.addEventListener('click', function(){

	if(editUser){
		editUser = false;
		table.deleteRow(rIndex);
		changeEditText();
	}
	createUser();
	numberOfUsers = users.length;

	// Create table of users
	// instantiate here as it is required for insertRow()
	table = document.querySelector("table");
	data = Object.keys(users[0]);

	// creates tbody separately outside of thead
	appendUserInTable(table, data);

	// create only one thead
	if(numberOfUsers == 1){
		document.getElementById("tableHeading").style.display = 'block';
		createUserTable();
	}

	if(numberOfUsers > 1){
		document.getElementById("sortButtons").style.display = 'inline-block';
	}

	calculateAverageAge();
	clearInputs();

	// document.getElementById("demo").innerHTML = "New text!";

});

// Sort by columns buttons
sortNameButton.addEventListener('click', function(){ 
	sortNameClicked = true;
	sortEmailClicked = false;
	sortAgeClicked = false;
	sortingText.style.display = 'block';
	sortingText.innerHTML = "Users sorted by: Name";
	sortTable(1);

});
sortEmailButton.addEventListener('click', function(){ 
	sortNameClicked = false;
	sortEmailClicked = true;
	sortAgeClicked = false;
	sortingText.style.display = 'block';
	sortingText.innerHTML = "Users sorted by: Email";
	sortTable(2);
});
sortAgeButton.addEventListener('click', function(){ 
	sortNameClicked = false;
	sortEmailClicked = false;
	sortAgeClicked = true;
	sortingText.style.display = 'block';
	sortingText.innerHTML = "Users sorted by: Age";
	sortTable(3); });

/* NOTE TO SELF:
	The () after a function == execute funtion and return value.
	Without () you only have the function, commonly used to pass as a callback
*/

function createUser(){

	// Extracting user values
	var newName = document.getElementById("name").value;
	var newEmail = document.getElementById("email").value;
	var newAge = document.getElementById('age').value;

	// User is created
	newUser = new Person(newName, newEmail, newAge);

	// Add user to array
	users.push(newUser);

}

function createUserTable(){
	generateTableHead(table, data);

	// create paragraph node with id
	var paragraph = document.createElement('p');
	paragraph.id = "averageAgeTxt";
	table.after(paragraph);
}


function generateTableHead(table, data){
	thead = table.createTHead();
	row = thead.insertRow();

	appendColumn("#");
	// for ... of statement creates a loop iterating over iterable objects

	for ( let key of data){
		appendColumn(key);
	}
}

function appendColumn(columnName){
	var th = document.createElement("th");
	var text = document.createTextNode(columnName);
	th.appendChild(text);
	row.appendChild(th);
}

function appendUserInTable(table, data){
	// Create new row for new user
	var row = table.insertRow();
	row.addEventListener('click', function(){
		selectedRowInfo(row);
		rIndex = row.rowIndex
		editUser = true;
		changeEditText();
	});
	// insert empty cell in the beginning for row number
	row.insertCell();

	// Insert user info in row
	for(key in newUser){
		var cell = row.insertCell();
		var text = document.createTextNode(newUser[key]);
		cell.appendChild(text);
	}

	if(sortNameClicked){
		sortTable(1);
	}
	else if(sortEmailClicked){
		sortTable(2);
	}
	else if(sortAgeClicked){
		sortTable(3);
	}
}

function calculateAverageAge(){
	var sumAge =0;
	var rows = table.rows;
	for (var i = 1; i < rows.length; i++){
		// Convert users[i].Age from string to int
		// if( users[i].Age != ""){
			var age = parseInt(rows[i].getElementsByTagName('td')[3].innerHTML);
			// users[i].Age = parseInt(users[i].Age)
			// var age = users[i].Age;
			sumAge += age;
		// }
	}
	averageAge = Math.round((sumAge/(rows.length-1)) *1000)/1000;
	document.getElementById("averageAgeTxt").innerHTML = "The average age of all users is: " + averageAge;
}

function sortTable(n) {
	var rows, j, current, next;
	var sortRows = 0;
	var sorting = 1;

	// exits when all rows have been sorted
	while (sorting == 1) {

		// initialize sorting to false in while loop
		sorting = 0;

		//table.rows returns a collection of all <tr> elements in the table
		//each row associated with each user
		rows = table.rows;
		
		//not accounting for the first row, thead
		for (j = 1; j < rows.length -1 ; j++) {
			
			//revert back to sortRows false
			sortRows = 0;
			
			// get current and next elements 
			current = rows[j].getElementsByTagName('td')[n].innerHTML;
			next = rows[j + 1].getElementsByTagName('td')[n].innerHTML;

			if(rows[0].getElementsByTagName('th')[n].innerHTML == "Age"){
				current = parseInt(current);
				next = parseInt(next);
			}
			else{
				current = current.toLowerCase();
				next = next.toLowerCase();
			}

			// compare the current and next elements and break to sort the two rows
			if (current > next) {
				// the two rows need sorting
				sortRows = 1;
				break;
			}
		}
		// sort the two adjacent rows
		if (sortRows == 1) {
			rows[j].parentNode.insertBefore(rows[j + 1], rows[j]);
			sorting = 1;
		}
	}
}

// ADDITIONAL FUNCTIONALITY
// Edit User Info
function selectedRowInfo(row){

	document.getElementById('name').value = row.cells[1].innerHTML;
	document.getElementById('email').value = row.cells[2].innerHTML;
	document.getElementById('age').value = row.cells[3].innerHTML;
}

//Change user information text to "edit"
function changeEditText(){
	if(editUser){
		document.getElementById("formTitle").innerHTML = "Edit User Information";
		document.getElementById("but").innerHTML = "EDIT USER";

	}
	else{
		document.getElementById("formTitle").innerHTML = "User Information";
		document.getElementById("but").innerHTML = "ADD USER";

	}
}

function clearInputs(){
	document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
}

