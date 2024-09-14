// Sample JSON data (replace this with your actual data)
const userData = [
    { "National ID": "12345", "username": "user1", "Usercode": "code1", "password": "pass1" },
    { "National ID": "67890", "username": "user2", "Usercode": "code2", "password": "pass2" }
];

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
