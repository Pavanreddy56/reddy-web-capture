
<?php
// Include database config file
require_once 'db-config.php';

// Initialize response array
$response = array();

// Process form data when form is submitted
if($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Validate and sanitize input
    $name = trim(mysqli_real_escape_string($conn, $_POST['name']));
    $email = trim(mysqli_real_escape_string($conn, $_POST['email']));
    $phone = trim(mysqli_real_escape_string($conn, $_POST['phone'] ?? ''));
    $message = trim(mysqli_real_escape_string($conn, $_POST['message'] ?? ''));
    
    // Check if required fields are not empty
    if(empty($name) || empty($email)) {
        $response['status'] = 'error';
        $response['message'] = 'Please fill in all required fields.';
    } else {
        // Prepare an insert statement
        $sql = "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";
        
        if($stmt = mysqli_prepare($conn, $sql)) {
            // Bind variables to the prepared statement as parameters
            mysqli_stmt_bind_param($stmt, "ssss", $name, $email, $phone, $message);
            
            // Attempt to execute the prepared statement
            if(mysqli_stmt_execute($stmt)) {
                $response['status'] = 'success';
                $response['message'] = 'Thank you! Your message has been sent successfully.';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Oops! Something went wrong. Please try again later.';
                error_log("MySQL Error: " . mysqli_error($conn));
            }
            
            // Close statement
            mysqli_stmt_close($stmt);
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Database error. Please try again later.';
            error_log("MySQL Prepare Error: " . mysqli_error($conn));
        }
    }
    
    // Return JSON response for AJAX requests
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        header('Content-Type: application/json');
        echo json_encode($response);
        exit;
    } else {
        // Redirect for regular form submission
        if($response['status'] == 'success') {
            // Redirect to thank-you page instead of simple message
            header('Location: thank-you.html');
        } else {
            header('Location: contact.html?status=error&msg=' . urlencode($response['message']));
        }
        exit;
    }
} else {
    // Not a POST request
    header('Location: contact.html');
    exit;
}

// Close connection
mysqli_close($conn);
?>
