const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem(
                "token",
                data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            message.style.color = "#22c55e";
            message.textContent =
                "Login Successful";

            setTimeout(() => {

                window.location.href =
                    "dashboard.html";

            }, 1000);

        } else {

            message.style.color = "#ef4444";

            message.textContent =
                data.message;
        }

    } catch (error) {

        message.style.color = "#ef4444";

        message.textContent =
            "Server Error";
    }

});