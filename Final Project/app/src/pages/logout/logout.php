<?php

session_start();
// destroy all session variables, meaning the user will be logged out
session_destroy();

// Redirect back to sign in page (index.html)
header('Location: ../../../index.php?logout=1');
?>
