// filepath: c:\Prog\Scripts\login.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        // Check if account exists in localStorage
        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const accountFound = accounts.some(acc => 
            acc.username === username && acc.password === password
        );
        
        if (!accountFound) {
            alert('Account not found!');
            document.getElementById('error-message').textContent = 'Invalid credentials. Please register first.';
        } else {
            // Proceed with login
            console.log('Login successful');
        }
    });
});