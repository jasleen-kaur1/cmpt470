<?php

include ("../landing/upFile.php");

session_start();

// If user is not logged in, redirect back to sign in page
if(!isset($_SESSION['username'])){
	header('Location: ../../../index.php');
	exit;
}
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
		<title>Histogram Generator Page</title>
		<link href="../../../css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body class="histogram_generator">
			<div class= "top_bar">
				<a href="../logout/logout.php">LOGOUT</a>
				
			</div>
		<h1 id="title">Please use the sliders to select letter grade cutoffs and display histogram.</h1>
<div>
		<div class="slidecontainer">
		

			<label for="a+">A+: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="a+" name="a+">
 			<p class= "percentage_label">Percentage: <span id="value_a+"></span></p>

 			<label for="a">A: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="a" name="a">
 			<p class= "percentage_label">Percentage: <span id="value_a"></span></p>

 			<label for="a-">A-: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="a-" name="a-">
 			<p class= "percentage_label">Percentage: <span id="value_a-"></span></p>


 			<label for="b+">B+: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="b+" name="b+">
 			<p class= "percentage_label">Percentage: <span id="value_b+"></span></p>


 			<label for="b">B: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="b" name="b">
 		 	<p class= "percentage_label">Percentage: <span id="value_b"></span></p>


 			<label for="b-">B-: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="b-" name="b-">
 			<p class= "percentage_label">Percentage: <span id="value_b-"></span></p>


 			<label for="c+">C+: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="c+" name="c+">
 			<p class= "percentage_label">Percentage: <span id="value_c+"></span></p>


 			<label for="c">C: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="c" name="c">
 			<p class= "percentage_label">Percentage: <span id="value_c"></span></p>


 			<label for="c-">C-: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="c-" name="c-">
 			<p class= "percentage_label">Percentage: <span id="value_c-"></span></p>


 			<label for="d">D: </label>
 			<input type="range" min="1" max="100" value="0" class="slider" id="d" name="d">
 			<p class= "percentage_label">Percentage: <span id="value_d"></span></p>
		 	
		</div>
		<div id="histogram_graph">
			<h1 id="histogram_title"> Histogram of Grades Distribution </h1>
			<p id="a_plus_graph"></p>
			<p id="a_graph"></p>
			<p id="a_minus_graph"></p>

			<p id="b_plus_graph"></p>
			<p id="b_graph"></p>
			<p id="b_minus_graph"></p>

			<p id="c_plus_graph"></p>
			<p id="c_graph"></p>
			<p id="c_minus_graph"></p>

			<p id="d_graph"></p>
			<p id="f_graph"></p>
		</div>
	</div>
	<div id="user_list_button">
		<a href="../final/results.php" >VIEW STUDENTS LIST</a>
	</div>

		
	</body>


	<?php
		$data_objects = $_SESSION['objects_to_save'];
		$headers_data_objects = $_SESSION['table_headers'];
	?>

	<script type="text/javascript">
		var data_objects =<?php echo json_encode($data_objects);?>;
		var headers_data_objects =<?php echo json_encode($headers_data_objects);?>;
		</script>
	<script type="text/javascript" src="script.js"></script>


</html>
