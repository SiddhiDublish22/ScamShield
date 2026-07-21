//jwt protection


const token =
localStorage.getItem("token");


if(!token){

    window.location.href="login.html";

}


// LOAD HISTORY
async function loadHistory(){


try{


const reports =
await apiRequest(
    "/scam/history",
    "GET"
);



const table =
document.getElementById(
    "historyTable"
);





if(!reports || reports.length===0){


table.innerHTML =

`
<tr>

<td colspan="5">

No analysis history found

</td>

</tr>
`;


return;


}




table.innerHTML="";




reports.forEach(report=>{


let riskClass="";



if(report.risk==="HIGH"){

    riskClass="high";

}

else if(report.risk==="MEDIUM"){

    riskClass="medium";

}

else{

    riskClass="safe";

}





table.innerHTML +=

`

<tr>


<td>

${new Date(report.createdAt)
.toLocaleDateString()}

</td>



<td>

${report.message}

</td>



<td>

<span class="${riskClass}">

${report.risk}

</span>

</td>




<td>

${report.score}%

</td>



<td>

${report.reason}

</td>



</tr>


`;



});




}

catch(error){


console.log(
"History Error:",
error
);



document.getElementById(
"historyTable"
).innerHTML =

`

<tr>

<td colspan="5">

Failed to load history

</td>

</tr>

`;



}



}




loadHistory();