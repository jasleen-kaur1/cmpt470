var data = JSON.parse(localStorage.getItem("user_info"));

function generateTableHead(table, headers_data_objects) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for(var i = 0; i<headers_data_objects.length; i++){
  	let th = document.createElement("th");
  	let text = document.createTextNode(headers_data_objects[i]);
  	th.appendChild(text);
  	row.appendChild(th);
  }
  let th = document.createElement("th");
  let text = document.createTextNode("Final Percentage");
  th.appendChild(text);
  row.appendChild(th);

}
function generateTable(table, data){
	for(let element of data){
		let row = table.insertRow();
		if (element[0] !== 'total'){
			for(key in element){
				let cell = row.insertCell();
				let text = document.createTextNode(element[key]);
				cell.appendChild(text);
			}
		}		
	}
}

let table = document.querySelector("table");
generateTable(table, data);
generateTableHead(table, headers_data_objects);



