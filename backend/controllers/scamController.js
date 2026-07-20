const ScamReport = require("../models/ScamReport");


//scam analysis

const checkScam = async (req, res) => {

    try {


        const { message } = req.body;


        let risk = "LOW";
        let score = 20;
        let reason = "No suspicious activity detected";



        const lowerMessage = 
        message.toLowerCase();



        // HIGH RISK WORDS

        const highRiskWords = [

            "otp",
            "lottery",
            "win",
            "winner",
            "password",
            "urgent",
            "money",
            "prize",
            "claim",
            "crypto",
            "investment"

        ];




        // MEDIUM RISK WORDS

        const mediumRiskWords = [

            "payment",
            "billing",
            "account",
            "verify",
            "verification",
            "update",
            "login",
            "alert",
            "failed",
            "transaction",
            "refund"

        ];






        // Check HIGH Risk

        highRiskWords.forEach((word)=>{


            if(lowerMessage.includes(word)){


                risk = "HIGH";

                score = 90;

                reason =
                "High risk scam keywords detected";


            }


        });






        // Check MEDIUM Risk
        // Only if HIGH is not detected


        if(risk !== "HIGH"){


            mediumRiskWords.forEach((word)=>{


                if(lowerMessage.includes(word)){


                    risk = "MEDIUM";

                    score = 50;

                    reason =
                    "Suspicious activity detected";


                }


            });


        }







        // Save Report


        const report = await ScamReport.create({

            userId: req.user.id,

            message,

            risk,

            score,

            reason

        });






        res.json({

            message:
            "Scam analysis completed",

            report

        });



    } catch(error){


        res.status(500).json({

            message:error.message

        });


    }

};


//get history
const getHistory = async (req,res)=>{


    try{


        const reports =
        await ScamReport.find({

            userId:req.user.id

        })
        .sort({
            createdAt:-1
        });



        res.json(reports);



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};




// Dashboard Stats

const getStats = async(req,res)=>{


    try{


        const reports =
        await ScamReport.find({

            userId:req.user.id

        });




        const totalReports =
        reports.length;



        const highRisk =
        reports.filter(
            report =>
            report.risk==="HIGH"
        ).length;



        const mediumRisk =
        reports.filter(
            report =>
            report.risk==="MEDIUM"
        ).length;



        const lowRisk =
        reports.filter(
            report =>
            report.risk==="LOW"
        ).length;




        res.json({

            totalReports,

            highRisk,

            mediumRisk,

            lowRisk

        });



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


};


module.exports = {

    checkScam,

    getHistory,

    getStats

};