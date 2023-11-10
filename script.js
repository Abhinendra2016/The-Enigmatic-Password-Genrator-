document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn'); 
    const passwordInput = document.getElementById('password');

    generateBtn.addEventListener('click', function () {
        const password = generatePassword(12); 
        passwordInput.value = password;
    });

    copyBtn.addEventListener('click', function () {
        passwordInput.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    });

    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset.charAt(randomIndex);
        }
        return password;
    }
});
