//jwt protection
const token = localStorage.getItem("token");


if (!token) {

    window.location.href = "login.html";

}

//load user data
const user = JSON.parse(
    localStorage.getItem("user")
);



if (user) {


    document.getElementById("username").innerText =
        user.name;


    document.getElementById("profileName").innerText =
        user.name;


    document.getElementById("profileEmail").innerText =
        user.email;

}

 //logout
document
.getElementById("logout")
.addEventListener(
"click",
()=>{


    localStorage.removeItem("token");

    localStorage.removeItem("user");


    window.location.href="login.html";


});

//load dashboard stats
async function loadStats(){


    try {


        const data = await apiRequest(
            "/scam/stats",
            "GET"
        );



        document.getElementById("totalChecks")
        .innerText =
        data.totalReports;



        document.getElementById("highChecks")
        .innerText =
        data.highRisk;



        document.getElementById("mediumChecks")
        .innerText =
        data.mediumRisk;



        document.getElementById("safeChecks")
        .innerText =
        data.lowRisk;



    }

    catch(error){

        console.log(
            "Stats Error:",
            error
        );

    }


}



loadStats();

//scam analyzer

const analyzeBtn =
document.getElementById("analyzeBtn");



analyzeBtn.addEventListener(
"click",
async()=>{


    const message =
    document
    .getElementById("messageInput")
    .value.trim();



    const result =
    document.getElementById("resultBox");




    if(message===""){


        result.innerHTML =
        `
        <p>
        Please enter message first
        </p>
        `;


        return;

    }





    try {


        result.innerHTML =
        `
        <p>
        Analyzing...
        </p>
        `;




        const data =
        await apiRequest(
            "/scam/check",
            "POST",
            {
                message: message
            }
        );



        const report =
        data.report;




        let color;



        if(report.risk==="HIGH"){

            color="#7f1d1d";

        }

        else if(report.risk==="MEDIUM"){

            color="#854d0e";

        }

        else{

            color="#166534";

        }




        result.style.background =
        color;




        result.innerHTML =
        `

        <h3>
        Risk Level:
        ${report.risk}
        </h3>


        <p>
        Score:
        ${report.score}%
        </p>


        <p>
        Reason:
        ${report.reason}
        </p>

        `;

        loadStats();



    }


    catch(error){


        console.log(
            "Analyzer Error:",
            error
        );


        result.innerHTML =
        `
        <p>
        Analysis failed
        </p>
        `;


    }


});