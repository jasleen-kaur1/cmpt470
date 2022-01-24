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
		<meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1">
		<title>Histogram Generator Page</title>
		<link href="../../../css/style.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<nav class="nav_bar">
			<div>
				<a href="../logout/logout.php">LOGOUT</a>
			</div>
		</nav>

		<h2>Grades For All Students</h2>
		<table id="fullTable">
		</table>
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
