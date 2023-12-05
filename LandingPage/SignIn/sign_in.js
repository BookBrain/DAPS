function submitForm() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    const formData = {
        username: username,
        password: password
    };

    fetch('http://localhost:8080/api/v1/book/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Login success:', data);
    })
    .catch(error => {
        console.error('Login error:', error);
        
    });
}