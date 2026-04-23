document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    msg.textContent = "";

    if (!name || !email || !password) {
        msg.textContent = "All fields required!";
        return;
    }

    if (password.length < 6) {
        msg.textContent = "Password must be 6+ characters!";
        return;
    }

    // Success → Redirect
    window.location.href = "success.html";
});