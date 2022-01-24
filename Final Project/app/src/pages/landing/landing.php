<?php
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
		<meta charset="utf-8">
		<title>Upload File Page</title>
		<link href="../../../css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body class="landing_page">
		<div>
			<a href="../logout/logout.php">LOGOUT</a>
		</div>
		<div class="content">
			<h2> Welcome back, <?=$_SESSION["username"]?>!</h2>
		</div>

		<div class="upload">
			<form enctype='multipart/form-data' method='post' action=''>
				<label id="upload_label">Upload students data file here:</label>
				<input type='file' name='file1' id='file1' class='inputfile' accept=".csv">
				<input type='submit' name='submit' id='upload' value=" Upload File">
			</form>
		</div>

		<?php
		if(isset($_POST['submit'])){
			if($_FILES["file1"]["size"] >0){

			// Save file in "upload" folder
			$fileToMove = $_FILES['file1']['tmp_name'];
			$destination = "./upload/" . $_FILES["file1"]["name"];
			if (move_uploaded_file($fileToMove,$destination)) {
				// echo "The file was uploaded and moved successfully!";
				// File uploaded and moved successfully

				include ("upFile.php");
				// extractCSV($destination);

				if(checkTotal($destination) !== 100){
		?>
				<p class="error_file"> Incorrect data in file. Please upload another file. </p>
		<?php

				}
				else{
					// Use SESSION to store the data objects
					// print_r($all_data_array);
					$_SESSION['objects_to_save'] = $all_data_array;
					header('Location: ../histogram/display.php');
				}
			}
			else {
				echo "There was a problem moving the file.";
			}
			
		?>
		<?php
			} else {
				// Clicked "submit" but no file was chosen
		?>
				<p class="error_file">No file chosen to upload. Please choose file and then click 'Upload File'.</p>
		<?php
			}
		}
		?>
		
	</body>
</html>





