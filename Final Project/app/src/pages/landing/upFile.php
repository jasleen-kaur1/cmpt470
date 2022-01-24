<?php

$all_data_array; 

function extractCSV($destination){
	// extracting csv into objects 
	$handle = fopen($destination, "r");
	$headers = fgetcsv($handle, 1000, ',');
	$_SESSION['table_headers'] = $headers;

	$GLOBALS['all_data_array'] = [];
	while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) 
	{
		// key is the column header value
		// $all_data_array[] = array_combine($headers,$data);
		$GLOBALS['all_data_array'][] = $data;
	}
}

function checkTotal($destination): int{
	extractCSV($destination);

	$all_data = $GLOBALS['all_data_array'];
	$sum_percentage = 0;
	foreach($all_data as $value){
		if ($value[0] == "total"){
			foreach($value as $found_arr_key => $found_value){
				if($found_value!=="total"){
					$sum_percentage += (int)($found_value);
				}
			}
		}
	}
	if($sum_percentage < 100){
		$all_data_array = array();
	}
	return $sum_percentage;
}

?>
