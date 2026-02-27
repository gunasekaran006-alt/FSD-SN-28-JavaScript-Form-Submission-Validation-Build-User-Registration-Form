document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page reload
    
    let isValid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Check
    if(name === "") { showErr('nameErr'); isValid = false; } else { hideErr('nameErr'); }

    // Email Check
    if(!emailRegex.test(email)) { showErr('emailErr'); isValid = false; } else { hideErr('emailErr'); }

    // Password Check
    if(pass.length < 6) { showErr('passErr'); isValid = false; } else { hideErr('passErr'); }

    if(isValid) {
        alert("Form Submitted Successfully! ✅");
        this.reset();
    }
});

function showErr(id) { document.getElementById(id).style.display = 'block'; }
function hideErr(id) { document.getElementById(id).style.display = 'none'; }