<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User login and Registration</title>
    
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
    
</head>
<body>
    <h2 id="hdg" style="
    display: inline-block;
    position: relative;
    left: 600px;
    top: 65px;
    font-family: 'Luckiest Guy', cursive;
    color: white;
    font-size: 62px;
    "
    >LOGIN PAGE</h2>
    <div class="container">
        <div class="login-box">
            <div class="row">          
                <div class="col-md-6 login-left">
                    <h2>Register Here</h2>
                    <form action="registration.php" method="post">
                        <div class="form-group">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control" required>
                        </div>

                        <div class="form-group">
                            <label>Instagram Username</label>
                            <input type="text" name="insta_name" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">
                            Sign Up
                        </button>

                    </form>
                </div>

                <div class="col-md-6 login-right">
                    <h2>Login Here</h2>
                    <form action="validation.php" method="post">
                        <div class="form-group">
                            <label>Instagram Username</label>
                            <input type="text" name="insta_name" class="form-control" required>
                        </div>

                        <button type="submit" class="btn btn-primary">
                            Login
                        </button>
                </div>
            </div>
        </div>
    </div>
</body>
</html>