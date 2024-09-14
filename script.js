let userData = [];

// Fetch JSON data from the external file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        userData = data;
        console.log('Data loaded:', userData);
    })
    .catch(error => console.error('Error loading data:', error));

function retrieveInfo() {
    const id = document.getElementById('nationalID').value;
    const resultBody = document.getElementById('resultBody');
    
    // Clear previous results
    resultBody.innerHTML = '';

    const user = userData.find(user => user["National ID"] === id);

    if (user) {
        // Create a new row and populate it with user data
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.Usercode}</td>
            <td>${user.password}</td>
        `;
        resultBody.appendChild(row);
    } else {
        // Show message if no user is found
        const row = document.createElement('tr');
        row.innerHTML = '<td colspan="3">No user found with this National ID.</td>';
        resultBody.appendChild(row);
    }
}