function displayInfo() {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const phone = document.getElementById('phone').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>User Information</h2>
        <p>My name is <strong>${name}</strong></p>
        <p>My ID is <strong>${id}</strong></p>
        <p>Phone: <strong>${phone}</strong></p>
    `;
}
