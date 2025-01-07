if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        
        // Check if the uploads directory exists
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true); // Create the directory if it doesn't exist
        }

        $uploadFile = $uploadDir . uniqid() . '-' . basename($_FILES['image']['name']);

        // Validate file type (only images)
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!in_array($_FILES['image']['type'], $allowedTypes)) {
            echo json_encode(['success' => false, 'error' => 'Invalid file type.']);
            exit;
        }

        // Move the uploaded file
        if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
            echo json_encode(['success' => true, 'url' => $uploadFile]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Failed to save file.']);
        }
    } else {
        echo json_encode([
            'success' => false, 
            'error' => 'No file uploaded or upload error: ' . $_FILES['image']['error']
        ]);
    }
}