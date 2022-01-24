<?php

// Start session to remember current data on the server
session_start();

include("../../../inc/config.php");

// username and password have been submitted as they are required fields, user clicked "Sign In"

if (isset($_POST['signin'])) {

	// Extract username and password from form
    $form_username = $_POST['username'];
    $form_password = md5($_POST['password']);

    $query = $connection->prepare("SELECT * from users WHERE username =?");
    $query->bind_param('s', $form_username);
    $query->execute();
    $query->store_result();

    if($query->num_rows > 0){

    	// if username exists bind the results from the db to $username and $password
    	$query->bind_result($username, $password);
    	$query->fetch();

    	// Correct password
    	if($password === $form_password){
    		$_SESSION['username'] = $_POST['username'];
    		// Go to landing page after successful login
    		header('Location: ../landing/landing.php');
    	}
    	else{
    		// Redirect back to home page when there's an incorrect password
    		header('Location: ../../../index.php?Incorrect=1');
    		    	}
    }
    else{
    	// Redirect back to home page when there's an incorrect username
    	header('Location: ../../../index.php?Incorrect=1');

    }
    mysqli_close($connection);
}


?>


