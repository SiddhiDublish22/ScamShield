const form = document.getElementById("registerForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/register",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({
                    name,
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        if(response.ok){

            message.style.color="#22c55e";

            message.textContent =
                "Registration Successful";

            setTimeout(()=>{
                window.location.href="login.html";
            },1500);

        }else{

            message.style.color="#ef4444";

            message.textContent =
                data.message || "Registration Failed";
        }

    }catch(error){

        message.style.color="#ef4444";

        message.textContent =
            "Server Error";
    }

});