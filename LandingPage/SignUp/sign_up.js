function submitForm() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    const formData = {
        username: username,
        password: password
    };

    fetch('https://f2de-62-173-45-70.ngrok-free.app', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log("regsitration success")
    })
    .catch(error => {
        console.error('Login error:', error);
        
    });
}
