
// all user information arrays - IMPORTANT
var user_information = data_objects;

var value_percentages = []

for(var k=0; k < user_information.length; k++){
	if(user_information[k][0] === "total"){
		for( var m = 1; m < user_information[k].length; m++ ){
			value_percentages.push(user_information[k][m])
		}
		break;
	}
}

for(var j=0; j < user_information.length; j++){
	var total_student_percentage = 0;

	if(user_information[j][0] != "total"){
		for(var l=1; l < user_information[j].length; l++){

			total_student_percentage += (user_information[j][l]*((value_percentages[l-1])/100));
		}
		user_information[j].push(total_student_percentage.toFixed(2));

	}
}

document.getElementById('histogram_title').style.display = "none";

// Initialize count of each letter grade
var count_a_plus = 0;
var count_a = 0;
var count_a_minus = 0;

var count_b_plus = 0;
var count_b = 0;
var count_b_minus = 0;

var count_c_plus = 0;
var count_c = 0;
var count_c_minus = 0;

var count_d = 0;
var count_f = 0;

var slider_a_plus = document.getElementById("a+");
var value_a_plus_text = document.getElementById("value_a+");
value_a_plus_text.innerHTML = slider_a_plus.value;

var slider_a = document.getElementById("a");
var value_a_text = document.getElementById("value_a");
value_a_text.innerHTML = slider_a.value;

var slider_a_minus = document.getElementById("a-");
var value_a_minus_text = document.getElementById("value_a-");
value_a_minus_text.innerHTML = slider_a_minus.value;

var slider_b_plus = document.getElementById("b+");
var value_b_plus_text = document.getElementById("value_b+");
value_b_plus_text.innerHTML = slider_b_plus.value;

var slider_b = document.getElementById("b");
var value_b_text = document.getElementById("value_b");
value_b_text.innerHTML = slider_b.value;

var slider_b_minus = document.getElementById("b-");
var value_b_minus_text = document.getElementById("value_b-");
value_b_minus_text.innerHTML = slider_b_minus.value;

var slider_c_plus = document.getElementById("c+");
var value_c_plus_text = document.getElementById("value_c+");
value_c_plus_text.innerHTML = slider_c_plus.value;

var slider_c = document.getElementById("c");
var value_c_text = document.getElementById("value_c");
value_c_text.innerHTML = slider_c.value;

var slider_c_minus = document.getElementById("c-");
var value_c_minus_text = document.getElementById("value_c-");
value_c_minus_text.innerHTML = slider_c_minus.value;

var slider_d = document.getElementById("d");
var value_d_text = document.getElementById("value_d");
value_d_text.innerHTML = slider_d.value;

// var slider_f = document.getElementById("f");
// var value_f_text = document.getElementById("value_f");
// value_f_text.innerHTML = slider_f.value;


// Add oninput or addeEventListener for all letter grades
slider_a_plus.oninput = function() {
  value_a_plus_text.innerHTML = this.value;

  update_values(slider_a, value_a_text, value_a_plus_text );
  update_values(slider_a_minus, value_a_minus_text, value_a_plus_text);
  update_values(slider_b_plus, value_b_plus_text, value_a_plus_text);
  update_values(slider_b, value_b_text, value_a_plus_text);
  update_values(slider_b_minus, value_b_minus_text, value_a_plus_text);
  update_values(slider_c_plus, value_c_plus_text, value_a_plus_text);
  update_values(slider_c, value_c_text, value_a_plus_text);
  update_values(slider_c_minus, value_c_minus_text, value_a_plus_text);
  update_values(slider_d, value_d_text, value_a_plus_text);
  // update_values(slider_f, value_f_text, value_a_plus_text);

  create_histogram();
}

slider_a.oninput = function() {
  value_a_text.innerHTML = this.value;

  update_values(slider_a_minus, value_a_minus_text, value_a_text);
  update_values(slider_b_plus, value_b_plus_text, value_a_text);
  update_values(slider_b, value_b_text, value_a_text);
  update_values(slider_b_minus, value_b_minus_text, value_a_text);
  update_values(slider_c_plus, value_c_plus_text, value_a_text);
  update_values(slider_c, value_c_text, value_a_text);
  update_values(slider_c_minus, value_c_minus_text, value_a_text);
  update_values(slider_d, value_d_text, value_a_text);
  // update_values(slider_f, value_f_text, value_a_text);

  create_histogram();

}

slider_a_minus.oninput = function() {
	value_a_minus_text.innerHTML = this.value;

	update_values(slider_b_plus, value_b_plus_text, value_a_minus_text);
	update_values(slider_b, value_b_text, value_a_minus_text);
	update_values(slider_b_minus, value_b_minus_text, value_a_minus_text);
	update_values(slider_c_plus, value_c_plus_text, value_a_minus_text);
	update_values(slider_c, value_c_text,value_a_minus_text);
	update_values(slider_c_minus, value_c_minus_text, value_a_minus_text);
	update_values(slider_d, value_d_text, value_a_minus_text);
	// update_values(slider_f, value_f_text, value_a_minus_text);

	create_histogram();
}

slider_b_plus.oninput = function() {
	value_b_plus_text.innerHTML = this.value;

	update_values(slider_b, value_b_text, value_b_plus_text);
	update_values(slider_b_minus, value_b_minus_text, value_b_plus_text);
	update_values(slider_c_plus, value_c_plus_text, value_b_plus_text);
	update_values(slider_c, value_c_text, value_b_plus_text);
	update_values(slider_c_minus, value_c_minus_text, value_b_plus_text);
	update_values(slider_d, value_d_text, value_b_plus_text);
	// update_values(slider_f, value_f_text, value_b_plus_text);

	create_histogram();
}

slider_b.oninput = function() {
	value_b_text.innerHTML = this.value;

	update_values(slider_b_minus, value_b_minus_text, value_b_text);
	update_values(slider_c_plus, value_c_plus_text, value_b_text);
	update_values(slider_c, value_c_text, value_b_text);
	update_values(slider_c_minus, value_c_minus_text, value_b_text);
	update_values(slider_d, value_d_text, value_b_text);
	// update_values(slider_f, value_f_text, value_b_text);

	create_histogram();
}

slider_b_minus.oninput = function() {
	value_b_minus_text.innerHTML = this.value;

	update_values(slider_c_plus, value_c_plus_text, value_b_minus_text);
	update_values(slider_c, value_c_text, value_b_minus_text);
	update_values(slider_c_minus, value_c_minus_text, value_b_minus_text);
	update_values(slider_d, value_d_text, value_b_minus_text);
	// update_values(slider_f, value_f_text, value_b_minus_text);

	create_histogram();
}

slider_c_plus.oninput = function() {
	value_c_plus_text.innerHTML = this.value;

	update_values(slider_c, value_c_text, value_c_plus_text);
	update_values(slider_c_minus, value_c_minus_text, value_c_plus_text);
	update_values(slider_d, value_d_text, value_c_plus_text);
	// update_values(slider_f, value_f_text, value_c_plus_text);

	create_histogram();
}

slider_c.oninput = function() {
	value_c_text.innerHTML = this.value;

	update_values(slider_c_minus, value_c_minus_text, value_c_text);
	update_values(slider_d, value_d_text, value_c_text);
	// update_values(slider_f, value_f_text, value_c_text);

	create_histogram();
}

slider_c_minus.oninput = function() {
	value_c_minus_text.innerHTML = this.value;

	update_values(slider_d, value_d_text, value_c_minus_text);
	// update_values(slider_f, value_f_text, value_c_minus_text);

	create_histogram();
}

slider_d.oninput = function() {
	value_d_text.innerHTML = this.value;

	// update_values(slider_f, value_f_text, value_d_text);

	create_histogram();
}

// slider_f.oninput = function() {
// 	value_f_text.innerHTML = this.value;

// 	create_histogram();
// }

function update_values(next_slider, next_value_text, current_slider_value){
	next_slider.max = current_slider_value.innerHTML -1;
  	next_slider.value = next_slider.max;
  	next_value_text.innerHTML = next_slider.value;
}
 
var lastKeyArray = user_information[0].length-1;

function create_histogram(){
	document.getElementById('histogram_title').style.display = "block";

	count_a_plus = 0;
	count_a = 0;
	count_a_minus = 0;

	count_b_plus = 0;
	count_b = 0;
	count_b_minus = 0;

	count_c_plus = 0;
	count_c = 0;
	count_c_minus = 0;

	count_d = 0;
	count_f = 0;

	var point = "O";
	for( var i = 0; i < user_information.length; i++){
		if(user_information[i][0] !== "total"){
			var user_final_percentage = parseFloat(user_information[i][lastKeyArray]);
			// A+ Calculation
			if( user_final_percentage >= parseFloat(slider_a_plus.value)){
				count_a_plus +=1;
			}

			count_a = count_cutoff(user_final_percentage, slider_a.value, slider_a_plus.value, count_a);
			count_a_minus = count_cutoff(user_final_percentage, slider_a_minus.value, slider_a.value, count_a_minus);
			count_b_plus = count_cutoff(user_final_percentage, slider_b_plus.value, slider_a_minus.value, count_b_plus);
			count_b = count_cutoff(user_final_percentage, slider_b.value, slider_b_plus.value, count_b);
			count_b_minus = count_cutoff(user_final_percentage, slider_b_minus.value, slider_b.value, count_b_minus);
			count_c_plus = count_cutoff(user_final_percentage, slider_c_plus.value, slider_b_minus.value, count_c_plus);
			count_c = count_cutoff(user_final_percentage, slider_c.value, slider_c_plus.value, count_c);
			count_c_minus = count_cutoff(user_final_percentage, slider_c_minus.value, slider_c.value, count_c_minus);
			count_d = count_cutoff(user_final_percentage, slider_d.value, slider_c_minus.value, count_d);

			if ( user_final_percentage < parseFloat(slider_d.value) ){
				count_f += 1
			}
		}
	}
	document.getElementById("a_plus_graph").innerHTML = "A+:".bold() + '\xa0\xa0\xa0\xa0' + point.repeat(count_a_plus);
	document.getElementById("a_graph").innerHTML = "A :".bold() + '\xa0\xa0\xa0\xa0\xa0'+  point.repeat(count_a);
	document.getElementById("a_minus_graph").innerHTML = "A-:".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_a_minus);

	document.getElementById("b_plus_graph").innerHTML = "B+:".bold() + '\xa0\xa0\xa0\xa0' + point.repeat(count_b_plus);
	document.getElementById("b_graph").innerHTML = "B :".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_b);
	document.getElementById("b_minus_graph").innerHTML = "B-:".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_b_minus);

	document.getElementById("c_plus_graph").innerHTML = "C+:".bold() + '\xa0\xa0\xa0\xa0' + point.repeat(count_c_plus);
	document.getElementById("c_graph").innerHTML = "C :".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_c);
	document.getElementById("c_minus_graph").innerHTML = "C-:".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_c_minus);

	document.getElementById("d_graph").innerHTML = "D :".bold() + '\xa0\xa0\xa0\xa0\xa0' + point.repeat(count_d);
	document.getElementById("f_graph").innerHTML = "F :".bold() + '\xa0\xa0\xa0\xa0\xa0' +  point.repeat(count_f);
}

function count_cutoff(user_final_percentage, lower_bound, upperbound, count){
	if( (user_final_percentage >= parseFloat(lower_bound)) && 
		(user_final_percentage < parseFloat(upperbound))){
		
		count +=1;
	}
	return count;
}

localStorage.setItem("user_info", JSON.stringify(user_information));
