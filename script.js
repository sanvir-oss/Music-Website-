// Wait 4 seconds for intro animation, then show login form
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("loaded");
    }, 4000);
});

const container = document.querySelector(".container");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

// Switch to register view
showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("register-mode");
});

// Switch back to login view
showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("register-mode");
});








//handling registratation details 
const registerButton = document.getElementById('registerbtn');

if (registerButton) {
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Get input values
        const name = document.getElementById('regname').value.trim();
        const email = document.getElementById('regemail').value.trim();
        const password = document.getElementById('regpassword').value.trim();

        if (!name || !email || !password) {
            alert('Please fill in all fields!');
            return;
        }

        // Retrieve existing users array or create new one
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Checking if name already exists
        if (users.find(u => u.name === name)) {
            alert('username already exists!');
            return;
        }

        // Adding new user
        users.push({ name, email, password });

        // Save updated list to localStorage
        localStorage.setItem("users", JSON.stringify(users));

        alert('Registration successful! Please login.');

        // Reset fields
        document.getElementById('regname').value = '';
        document.getElementById('regemail').value = '';
        document.getElementById('regpassword').value = '';


    });
}




// Handle Login details
const loginButton = document.getElementById('loginbtn');

if(loginButton){
loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginemail').value.trim();
    const password = document.getElementById('loginpassword').value.trim();

    if (!email || !password) {
        alert('Please fill in both the fields!');
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userboolean=users.find(u=> u.email===email && u.password===password);
    let checkuserreg=users.find(u=>u.email===email)
    


    if(userboolean){
        localStorage.setItem("logedinuser",userboolean.name);
        console.log(userboolean.name)
        // Reset fields
        document.getElementById('regname').value = '';
        document.getElementById('regemail').value = '';
        document.getElementById('regpassword').value = '';
        alert("login successful");
        // window.location.href="loggedinuser.html"
        window.location.href="home.html"


    }
    else if(!checkuserreg){
        alert('No account found. Please register first!');

    }

    else{
        alert('invalid credentials');
    }


});
}









