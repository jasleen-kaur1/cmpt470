<?php

$DBUSER = 'readonlyuser';
$DBPASSWORD = 'readonly';
$DBHOST = '35.227.146.173';
$DB_NAME = 'cmpt470';

$connection = mysqli_connect($DBHOST, $DBUSER, $DBPASSWORD, $DB_NAME);

// mysqli_connect_errno returns the last error code
if ( mysqli_connect_errno() ) {
	exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}

?>