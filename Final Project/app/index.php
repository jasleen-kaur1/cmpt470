<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Student Information Portal</title>
		<link href="css/style.css" rel="stylesheet" type="text/css" >

	</head>
	<body>
		<div class="signin">
			<form method="post" action="src/pages/login/authenticate.php" name="signin-form">
				<fieldset id="sign_in_fieldset">
					<h2 id="formTitle"> Sign In</h2>
					<?php 
                        if(@$_GET['Incorrect']==1){
                    ?>
                    		<p class="error">Please try again. Incorrect username or password.<p>

                    <?php
                       	}
                       	if(@$_GET['logout']==1){
                     ?>
                       		<p class="error">You've successfully logged out! Sign in again to view student information.</p>
                    <?php
                       	}
                    ?>
			    	<div class="form-element">
			        	<label for="username">Username: </label>
			        	<input type="text" name="username" required />
			    	</div>
			    	<div class="form-element">
				        <label for="password">Password: </label>
				        <input type="password" name="password" required />
			    	</div>

			    	<button type="submit" name="signin" value="signin" id="sign_in_button">SIGN IN</button>
		    	</fieldset>


			</form>

		</div>
	</body>
</html>

