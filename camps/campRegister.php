<?php
// Database connection
$servername = "192.168.0.100";
$username = "rockside_aym";
$password = "Shaelyn2016#";
$database = "rockside_aym";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission for adding or updating records
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $id = isset($_POST['id']) ? intval($_POST['id']) : 0;
    $first_name = $_POST['first_name'];
    $church = $_POST['church'];
    $id_number = $_POST['id_number'];
    $programs = [
        'financialLiteracy' => isset($_POST['financialLiteracy']) ? 1 : 0,
        'basicCoding' => isset($_POST['basicCoding']) ? 1 : 0,
        'gardening' => isset($_POST['gardening']) ? 1 : 0,
        'electronics' => isset($_POST['electronics']) ? 1 : 0,
        'electrical' => isset($_POST['electrical']) ? 1 : 0,
        'eggIncubation' => isset($_POST['eggIncubation']) ? 1 : 0,
        'tailoring' => isset($_POST['tailoring']) ? 1 : 0,
        'baking' => isset($_POST['baking']) ? 1 : 0,
    ];

    if ($id > 0) {
        // Update existing record
        $sql = "UPDATE qualified_learners SET 
            first_name='$first_name', church='$church', id_number='$id_number', 
            financialLiteracy={$programs['financialLiteracy']}, basicCoding={$programs['basicCoding']}, 
            gardening={$programs['gardening']}, electronics={$programs['electronics']}, 
            electrical={$programs['electrical']}, eggIncubation={$programs['eggIncubation']}, 
            tailoring={$programs['tailoring']}, baking={$programs['baking']} 
            WHERE id=$id";
    } else {
        // Insert new record
        $sql = "INSERT INTO qualified_learners (first_name, church, id_number, financialLiteracy, basicCoding, gardening, electronics, electrical, eggIncubation, tailoring, baking) 
                VALUES ('$first_name', '$church', '$id_number', 
                {$programs['financialLiteracy']}, {$programs['basicCoding']}, 
                {$programs['gardening']}, {$programs['electronics']}, 
                {$programs['electrical']}, {$programs['eggIncubation']}, 
                {$programs['tailoring']}, {$programs['baking']})";
    }

    if ($conn->query($sql) === TRUE) {
        echo "Record successfully saved.";
    } else {
        echo "Error: " . $conn->error;
    }
}

// Handle delete
if (isset($_GET['delete'])) {
    $id = intval($_GET['delete']);
    $conn->query("DELETE FROM qualified_learners WHERE id=$id");
}

// Fetch all records
$records = $conn->query("SELECT * FROM qualified_learners");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Qualified Learners Register</title>
    <style>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 2px;
    background-color: #f4f4f4;
    color: #333;
}

h1 {
    text-align: center;
    color: #fff;
    background-color: rgba(24,57,95,0.5);
    border-radius: 8px;
    
}

/* Form Styles */
form {
    background-color: #fff;
    padding: 5px;
    margin: 0 auto 2px auto;
    border: 1px solid #ccc;
    border-radius: 0 0 8px 8px;
    max-width: 600px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
/* opacity: 0.9; /* Make it look disabled *
   pointer-events: none; /* Prevent interactions */
        }
/*
        form.enabled {
            opacity: 1; /* Restore appearance when enabled *
            pointer-events: auto; /* Allow interactions *
        }
/*
form label {
    display: block;
    margin-bottom: 2px;
    margin-top: 2px;
    font-weight: bold;
}

form input[type="text"],
form input[type="checkbox"] {
    margin-top: 5px;
    margin-bottom: 1px;
    padding: 5px;
    width: calc(100% - 16px);
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}
*/
form fieldset {
    border: 1px solid #ccc;
    border-radius: 5px 5px 0 0;
    padding: 5px;
    margin-bottom: 3px;
}

form fieldset legend {
    font-weight: bold;
    color: #555;
}

form button, button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 2px 5px;
    border-radius: 0 0 10px 10px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    margin-bottom: 0;
}

form button:hover {
    background-color: #0056b3;
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 2px auto;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

table th,
table td {
    padding: 2px;
    text-align: left;
    border: 1px solid #ddd;
}

table th {
    background-color: #007bff;
    color: #fff;
    font-weight: bold;
}

table tr:nth-child(even) {
    background-color: #f9f9f9;
}

table tr:hover {
    background-color: #f1f1f1;
}

/* Buttons in Table */
table button,
table a {
    background-color: transparent;
    color: #fff;
    text-decoration: none;
    border: none;
    padding: 2px 5px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

table button:hover,
table a:hover {
    background-color: transparent;
}

table a {
    margin-left: 5px;
    background-color: transparent;
}

table a:hover {
    background-color: transparent;
}
    
    ol {
            padding-left: 0;
            margin-left: 0;
            list-style-position: inside;
    }

#why {
    align-self: flex-end;
    margin: 0;
}
        /* Toggle button */
        .toggle-button {
            position: fixed;
            top: 10px;
            left: 10px;
            background-color: rgb(23,56,200);
            color: white;
            font-weight: bold;
            border: none;
            width: 90%;
            padding: 2px 20px;
            border-radius: 5px 5px 5px 0;
            cursor: pointer;
            z-index: 1100;
        }

        .toggle-button:hover {
            background-color: #0056b3;
        }
          /* Sticky and minimized form */
        .formContainer {
            position: fixed;
            top: 25px;
            left: 10px;
            background-color: rgba(23,36,200,0.6);
            padding: 2px;
            border-radius: 0 0 8px 8px;
            width: 85%;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            display: none; /* Hidden by default */
        }

        .formContainer.show {
            display: block; /* Show when toggled */
        }
    
            #password {
                width: 100%;
                margin: 5px 0 0 0;
                border-radius: 10px 10px 0 0;
                border: none;
                background: rgba(255,255,255,0.9);
                text-align: center;
            }
            #adminForm {
            display: none;
            margin-top: 0px;
        }

        input:disabled, button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        #placeholder {
            width: 150px;
            height: 150px;
            background-color: #f0f0f0;
            background-size: cover;
            background-position: center;
            border: 1px solid #ddd;
            margin-bottom: 10px;
        }
    
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%;
    border-radius: 10px;
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

#recordModal {
display: none; 
position: fixed; 
top: 50%;
left: 50%;
color: white;
transform: translate(-50%, -50%); 
width: 80%; 
background: rgba(23,45,64,0.9);
border-radius: 20px;
border: 1px solid #ccc; 
padding: 20px; 
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
z-index: 1000;
}

    </style>
</head>
<body>
    <h1>Qualified Learners Register</h1>

            <!-- Toggle Button -->
    <button class="toggle-button" onclick="toggleForm()">Form</button>

        
    <!-- Form to Add/Edit Learners -->
<div class="formContainer" id="formContainer">
    <form method="POST" action="" id="adminForm">
        <input type="hidden" name="id" id="form_id">
        <input type="text" name="first_name" id="form_first_name" placeholder="Full Names" style="width:100%;" required disabled><br><br>
        <input type="text" name="church" id="form_church" placeholder="Church Name" style="width:100%;" required disabled><br><br>
        <input type="text" name="id_number" id="form_id_number" placeholder="id Number" style="width:100%;" required disabled><br><br>

        
        <fieldset>
            <legend>Programs</legend>
            <label>Financial Literacy: <input type="checkbox" name="financialLiteracy" id="form_financialLiteracy" disabled></label><br>
            <label>Basic Coding: <input type="checkbox" name="basicCoding" id="form_basicCoding" disabled></label><br>
            <label>Gardening: <input type="checkbox" name="gardening" id="form_gardening" disabled></label><br>
            <label>Electronics: <input type="checkbox" name="electronics" id="form_electronics" disabled></label><br>
            <label>Electrical: <input type="checkbox" name="electrical" id="form_electrical" disabled></label><br>
            <label>Egg Incubation: <input type="checkbox" name="eggIncubation" id="form_eggIncubation" disabled></label><br>
            <label>Tailoring: <input type="checkbox" name="tailoring" id="form_tailoring" disabled></label><br>
            <label>Baking: <input type="checkbox" name="baking" id="form_baking" disabled></label><br>
        </fieldset>
        
        <div id="why" style="display: flex; justify-content: space-between;">
             <button type="submit" style="margin: 0 10px;background-color:rgb(22,145,32,0.4);" disabled>Save</button>
             <button onclick="window.location.href='http://rocksideaym.com.preview.services/camps/crossoverCamp2024.html'" style="margin: 0 10px;background-color:rgb(122,45,32,0.4);">Go Back</button>
        </div>
        
    </form>
            <div id="adminInput">
        <!-- Password field for editing -->
        <input type="password" id="password" placeholder="Authorization Code">
        <button type="button" onclick="checkPassword()">Authenticate</button>
        </div>
</div>
    
<!-- Modal for Record Details -->
<div id="recordModal">
    <span onclick="closeModal()" style="cursor: pointer; float: right; font-size: 20px;">&times;</span>
    <div id="modalDetails"></div>
</div>


    
    
<script>
// Function to open the modal with record details
function openModal(record) {
  const modal = document.getElementById('recordModal');
  const recordImage = document.getElementById('recordImage');
  const recordName = document.getElementById('recordName');
  const recordID = document.getElementById('recordID');
  const recordLessons = document.getElementById('recordLessons');
  const imageInput = document.getElementById('imageInput');

  // Populate modal with record details
  recordName.textContent = `${record.firstName} ${record.surname}`;
  recordID.textContent = record.idNumber;
  recordLessons.innerHTML = record.lessons.map(lesson => `<li>${lesson}</li>`).join('');

  // Generate a unique key for the record's image
  const localImageKey = `record_${record.id}_image`;

  // Check for locally saved image
  const localImage = localStorage.getItem(localImageKey);
  if (localImage) {
    recordImage.src = localImage; // Use local image if available
  } else {
    recordImage.src = record.picture; // Fallback to server image
  }

  // Event listener for image input (capture or upload)
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        // Save the image to localStorage
        localStorage.setItem(localImageKey, base64Image);
        // Update the modal image
        recordImage.src = base64Image;
      };
      reader.readAsDataURL(file);
    }
  });

  // Show the modal
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('recordModal');
  modal.style.display = 'none';
}

// Attach double-click event listeners to rows
document.addEventListener('DOMContentLoaded', () => {
  const rows = document.querySelectorAll('tbody tr');
  rows.forEach(row => {
    row.addEventListener('dblclick', () => {
      const record = JSON.parse(row.getAttribute('data-record'));
      openModal(record);
    });
  });
});
    
    
    
    document.addEventListener('click', (event) => {
  if (event.target.id === 'modalImage') {
    // Open image in full screen on click
    const imgSrc = event.target.src;
    const fullScreen = window.open('', '_blank');
    fullScreen.document.write(`<img src="${imgSrc}" style="width:100%; height:auto;">`);
  }
});

document.addEventListener('change', (event) => {
  if (event.target.id === 'imageInput') {
    const file = event.target.files[0];
    if (file) {
      // Preview the new image
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('modalImage').src = e.target.result;
      };
      reader.readAsDataURL(file);

      // Upload the image to the server
      uploadImage(file);
    }
  }
});

function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  fetch('upload.php', { // Replace with your backend endpoint
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Image uploaded successfully!');
      } else {
        alert('Image upload failed.');
      }
    })
    .catch(error => console.error('Error:', error));
}
    
    
    
        let isAdmin = false;

        // Function to verify password
        function checkPassword() {
            const password = document.getElementById('password').value;
            if (password === '*25admiN#') { // Replace with your secure password
                isAdmin = true;
                enableFormElements();
                document.getElementById('adminForm').style.display = 'block';
                document.getElementById('adminInput').style.display = 'none';
                alert('Access granted! You can now edit the form.');
            } else {
                alert('Incorrect password. Access denied.');
            }
        }

        // Enable form elements
        function enableFormElements() {
            const formElements = document.querySelectorAll('#adminForm input, #adminForm button');
            formElements.forEach(element => {
                element.disabled = false;
            });
        }

        // Open file input for image upload
        function openFileInput() {
            if (!isAdmin) {
                alert('You do not have permission to edit.');
                return;
            }
            document.getElementById('pictureInput').click();
        }

        // Display selected image in placeholder
        function displayImage(input) {
            if (!isAdmin) {
                alert('You do not have permission to edit.');
                return;
            }

            const placeholder = document.getElementById('placeholder');
            const file = input.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    placeholder.style.backgroundImage = `url('${e.target.result}')`;
                };
                reader.readAsDataURL(file);
            }
        }
</script>
    <hr>

    <!-- Table to View/Edit/Delete Learners -->
    <table>
        <thead>
            <tr>
       <!-- <th>ID</th> -->
                <th>Names</th>
                <th>Church</th>
                <th>IDs</th>
                <th>Lessons</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
    <?php while ($row = $records->fetch_assoc()): ?>
        <tr ondblclick="openModal(<?= htmlspecialchars(json_encode([
    'first_name' => $row['first_name'],
    'church' => $row['church'],
    'id_number' => $row['id_number'],
    'church' => $row['church'],
])) ?>, this)">
            <td><?= $row['first_name'] ?> <?= $row['church'] ?></td>
            <td><?= $row['church'] ?></td>
            <td><?= $row['id_number'] ?></td>
            <td>
                <ol>
                    <?= $row['financialLiteracy'] ? "<li>Financial Literacy</li>" : "" ?>
                    <?= $row['basicCoding'] ? "<li>Basic Coding</li>" : "" ?>
                    <?= $row['gardening'] ? "<li>Gardening</li>" : "" ?>
                    <?= $row['electronics'] ? "<li>Electronics</li>" : "" ?>
                    <?= $row['electrical'] ? "<li>Electrical</li>" : "" ?>
                    <?= $row['eggIncubation'] ? "<li>Egg Incubation</li>" : "" ?>
                    <?= $row['tailoring'] ? "<li>Tailoring</li>" : "" ?>
                    <?= $row['baking'] ? "<li>Baking</li>" : "" ?>
                </ol>
            </td>
            <td style="display: flex; justify-content: space-between; border: none;">
                <button onclick="toggleForm(); editRecord(<?= htmlspecialchars(json_encode($row)) ?>)">🖊️</button>
                <a href="?delete=<?= $row['id'] ?>" onclick="return confirm('Really! You want to delete?')">🗑️</a>
            </td>
        </tr>
    <?php endwhile; ?>
</tbody>
    </table>
    <script>
        function toggleForm() {
            const formContainer = document.getElementById('formContainer');
            formContainer.classList.toggle('show');
        }

        function editRecord(record) {
            document.getElementById('form_id').value = record.id;
            document.getElementById('form_first_name').value = record.first_name;
            document.getElementById('form_church').value = record.church;
            document.getElementById('form_id_number').value = record.id_number;
            for (let i = 1; i <= 8; i++) {
                document.getElementById('form_program_' + i).checked = record['program_' + i] == 1;
            }
            document.getElementById('formContainer').classList.add('show'); // Show form when editing
        }
    </script>
    <script>
        function goBack() {
            window.history.back();
        }
    </script>
    <script>
        function editRecord(record) {
            document.getElementById('form_id').value = record.id;
            document.getElementById('form_first_name').value = record.first_name;
            document.getElementById('form_church').value = record.church;
            document.getElementById('form_id_number').value = record.id_number;
            document.getElementById('form_financialLiteracy').checked = record.financialLiteracy == 1;
            document.getElementById('form_basicCoding').checked = record.basicCoding == 1;
            document.getElementById('form_gardening').checked = record.gardening == 1;
            document.getElementById('form_electronics').checked = record.electronics == 1;
            document.getElementById('form_electrical').checked = record.electrical == 1;
            document.getElementById('form_eggIncubation').checked = record.eggIncubation == 1;
            document.getElementById('form_tailoring').checked = record.tailoring == 1;
            document.getElementById('form_baking').checked = record.baking == 1;
        }
    </script>
</body>
</html>