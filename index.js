const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const client = new Client({
    authStrategy: new LocalAuth(),
});
client.initialize();
client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});
client.on("authenticated", () => {
    console.log("AUTHENTICATED");
});
function sendWhatsappAlert(message, numbers, update_status) {
    if (update_status == true) {
        client.on("ready", async () => {
            const number = numbers;
            // Your message.
            const text = message;
            const chatId = number.substring(1) + "@c.us";
            // Sending message.
            await client.sendMessage(chatId, text);
        });
    }

    return "emd";
}

let jobs = [
    {
        _id: "63ef6c07c497d7d63c06cb33",
        role: "Supervisor(Ex Army)",
        company: "Koshambh Multired",
        location: "Kanpur",
        salary: "32000",
        link: "https://in.indeed.com/company/KOSHAMBH-MULTITRED-PRIVATE-LIMITED/jobs/Supervisor-ded8316eb48bccae?fccid=788dac0eb6d0f5e9&vjs=3",
        __v: 0,
    },
    {
        _id: "63ef6c07c497d7d63c06cb35",
        role: "Branch Manager (Ex Army)",
        company: "Konicy Industries Pvt Ltd",
        location: "Jodhpur",
        salary: "35000",
        link: "https://in.indeed.com/company/KONICY-INDUSTRIES-PRIVATE-LIMITED/jobs/Branch-Manager-72be8c03c8ef1337?fccid=a14851c4947962ed&vjs=3",
        __v: 0,
    },
    {
        _id: "63ef6c07c497d7d63c06cb37",
        role: "School Administrator",
        company: "Crimson Anisha Global School",
        location: "Pune",
        salary: "80000",
        link: "https://in.indeed.com/pagead/clk?mo=r&ad=-6NYlbfkN0AQh3UD6MVZo9CBBfnj0BFdzCls3DgwYgMAplfbXAGCwvUq6GyDgObpDN_i3qLy26EvjPu33mKyuWM3KYSq-bBUR5E_aIFeW8LwYS5JwW285nvaEb9dAijLvmSuEUV__UkkAu5L-ldAuSmRT-PD_5vxZpnZhzrpkXP5JY4KU6LxRc33H1XZpleZhLJojGFYLfxTZN_H2Js8P71AhtthSl9fy7hgrDE5SjAL-47AsGghy7o2pIdlJxQALjfGUSOLckD78edGn1Y4ZllnT7HO98jSaI5YWTbpP3rSd-7aq0js8oIx7IfP5oemI1DxtfwrvrdEubM2h01r8HRZp-nywryh0WuIncmGAfRJnIwxp87a2Yqte4hrUq51v5kU0Cte2IROc4F48DXuiwddiCsJ49c5Q9r9E08ob4teGRShPXm94485AF1ToK4nMOUWjwL9e5xm_yDa3fMkUV8jqTr1SbvQaAc5_TemnG-GxJGFf1l-EMccOh4pvdSALO36exfb2-3pbjsEFEZonnXVsnrHFKY7hQdeLXJdCiQ=&xkcb=SoBS-_M3TvUHYGWysJ0LbzkdCdPP&p=2&fvj=1&vjs=3&tk=1gpfe25oii92v800&jsa=5250",
        __v: 0,
    },
    {
        _id: "63ef6c07c497d7d63c06cb39",
        role: "Head Admin",
        company: "Cyber Futuristics",
        location: "Noida",
        salary: "NA",
        link: "https://in.indeed.com/rc/clk?jk=753e304525a8b964&fccid=8c7545149e9976ac&vjs=3",
        __v: 0,
    },
    {
        _id: "63ef6c07c497d7d63c06cb3b",
        role: "Administration Officer (Ex Army)",
        company: "Magic International",
        location: "Noida",
        salary: "20000",
        link: "https://in.indeed.com/company/MAGIC-INTERNATIONAL-PVT-LTD/jobs/Administration-Officer-de2589b28310d04a?fccid=16e72d0798954509&vjs=3",
        __v: 0,
    },
    {
        _id: "63ef6c08c497d7d63c06cb3d",
        role: "Assistant Manager",
        company: "Radiate Trademart Private Ltd",
        location: "Lucknow",
        salary: "30000",
        link: "https://in.indeed.com/company/Radiate-Trademart-Private-Limited/jobs/Assistant-Manager-9adae39f3ffca265?fccid=a024088dab19af87&vjs=3",
        __v: 0,
    },
    {
        _id: "63ef6c08c497d7d63c06cb3f",
        role: "Staff Manager (Ex Army)",
        company: "Svarn Infratel Private Ltd",
        location: "Pathankot",
        salary: "30000",
        link: "https://in.indeed.com/company/SVARN-INFRATEL-PRIVATE-LIMITED/jobs/Staff-Manager-efef99d81f180734?fccid=4d413aa6c9936be4&vjs=3",
        __v: 0,
    },
];
const pensions = require('./pension');
const widow = require('./widow');
let intro_txt = "Select the following options: \n\n 1.To get Job Updates\n\n2.Pension Calculator \n\n3.Counselling \n\n4.Apply for Finantial Aid \n\n5.Benefits for war Widows and childcare services \n\n6.Army hospitals Near you \n\n7.Kendriya Vidyalay near me \n\n8.Information regarding the mentee session \n\n9. In case of a panic attack press 9 \n\n10. Pension Schemes Info \n\nPress # to display the main menue";

client.on("message", (message) => {
    console.log(message.body);

    if (message.body == "1") {
        message.reply(
            "Links to acess job opportunities : https://www.youtube.com/watch?v=xvFZjo5PgG0"
        );

        for (let job of jobs) {
            message.reply(
                `Role : ${job.role} \n\n Company : ${job.role} \n\n*Location :* ${job.location} \n\n*Salary :* ${job.salary} \n\n*Apply here :* ${job.link}`
            );
        }
        message.reply("\n Press # for main Menue`);");
    } else if (message.body == "2") {
        message.reply("Enter your last drawn salary : ");
    } else if (message.body == "3") {
        message.reply(
            "As you have selected counselling, We will book an appointment with one of our specialists that is : \n\n Dr.Namrata Khetan \n\n*contact :* +919137962083 \n\n Type Yes to confirm"
        );
    } else if (message.body == "4") {
        message.reply(
            "Please fill in the form to apply for Financial Aid : https://forms.gle/3VHDiFQMVFnrKc1c8 \n\n after filling the form presss # for main menue!"
        );
    } else if (message.body == "5") {
        message.reply(
            "11. Ex-gratia grant\n\n12.Army Group Insurance Fund (AGIF)\n\n13. Prime Minister Scholarship Scheme for Ex-Servicemen\n\n14. War Memorial Hostels\n\n15. Army Welfare Placement Organisation (AWPO)\n\n16. Defense Scholarship for Girls.\n\n Benefits for war widows could also be viewed here on https://desw.gov.in/en/benefits-widows-battle-casualties"
        );
    } else if (message.body == "6") {
        message.reply(
            "Army hospitals near you : https://www.google.com/search?q=army+hospitals+neare+me"
        );
    } else if (message.body == "7") {
        message.reply(
            " Kendriya Vidyalay  near You  : https://www.google.com/search?q=kendriya+vidyalaya+near+me"
        );
    } else if (message.body == "8") {
        message.reply(
            " This weeks session would be on how to transition to a normal life  by - Genral Manoj Mukund \n\nThe details for the meeting are as folllows:\n\n*Time :* Sunday 5Pm \n\n*Meeting Link :* https://meet.google.com/oxi-zphb-ugm"
        );
    } else if (message.body == "9") {
        message.reply("Take 10 long deeep breadths ");
        setTimeout(function () {
            message.reply(
                "Start relaxing your muscles starting from you toes and slowly move up to your legs and so on....."
            );
        }, 6000);

        setTimeout(function () {
            message.reply(
                "Focus on the sound of your breadth \n\n try to feel the ground under the foot \n\n Then try to smell your surroundings \n\n"
            );
        }, 12000);

        setTimeout(function () {
            message.reply(
                "Imagin yourself on a calm beach... \n\n Standing and taking in the deep breadths \n\n feeling the calmness that the sea offers"
            );
        }, 18000);

        setTimeout(function () {
            message.reply(
                "If posible sit down and try to meditate using the link : https://www.youtube.com/watch?v=c45CDcrsc9c"
            );
        }, 24000);

        setTimeout(function () {
            message.reply(
                "Hope you feel calm after this if not contact Dr.Namrata Khetan at +919137962083"
            );
        }, 30000);
    } else if (parseInt(message.body) >= 1000) {
        message.reply(
            `The pension that You would be recieving according to the last drawn salary ( provided you have worked for more than 10 years)  : ${0.5 * parseInt(message.body)
            } \n\n Press # for main Menue`
        );
    } else if (message.body == "10") {
        message.reply("Select the scheme that you want to check \n\nA. Gallantry Awards Scheme \n\nB. Invalid Pension \n\nC. Retirement Gratuity \n\nD. War Injury Pension\n\nE. Family Pension");
    } else if (message.body == "#") {
        message.reply(intro_txt
        );
    } else if (message.body.toLowerCase() == "yes") {
        message.reply(
            "Your appointment has been fixed ! \n\n Press # for main Menue"
        );
    } else if (message.body.toLowerCase() == "no") {
        message.reply("Appointment has been cancelled! \n\n Press # for main Menue");
    } else if (message.body == "A") {
        message.reply(`Name: ${pensions[0]["name"]}\n\nEligibility Criteria: ${pensions[0]["eligibility_criteria"]}\n\nApplication Link: ${pensions[0]["application_link"]} \n\n Press # for main Menue`);
    } else if (message.body == "B") {
        message.reply(`Name: ${pensions[1]["name"]}\n\nEligibility Criteria: ${pensions[1]["eligibility_criteria"]}\n\nApplication Link: ${pensions[1]["application_link"]} \n\n Press # for main Menue`);
    } else if (message.body == "C") {
        message.reply(`Name: ${pensions[2]["name"]}\n\nEligibility Criteria: ${pensions[2]["eligibility_criteria"]}\n\nApplication Link: ${pensions[2]["application_link"]} \n\n Press # for main Menue`);
    } else if (message.body == "D") {
        message.reply(`Name: ${pensions[3]["name"]}\n\nEligibility Criteria: ${pensions[3]["eligibility_criteria"]}\n\nApplication Link: ${pensions[3]["application_link"]} \n\n Press # for main Menue`);
    } else if (message.body == "E") {
        message.reply(`Name: ${pensions[4]["name"]}\n\nEligibility Criteria: ${pensions[4]["eligibility_criteria"]}\n\nApplication Link: ${pensions[4]["application_link"]}\n\n Press # for main Menue`);
    } else if (message.body == "11") {
        message.reply(`Name: ${widow[0]["name"]}\n\nDescription: ${widow[0]["description"]}\n\n Press # for main Menue`);
    } else if (message.body == "12") {
        message.reply(`Name: ${widow[1]["name"]}\n\nDescription: ${widow[1]["description"]}\n\n Press # for main Menue`);
    } else if (message.body == "13") {
        message.reply(`Name: ${widow[2]["name"]}\n\nDescription: ${widow[2]["description"]}\n\n Press # for main Menue`);
    } else if (message.body == "14") {
        message.reply(`Name: ${widow[3]["name"]}\n\nDescription: ${widow[3]["description"]}\n\n Press # for main Menue`);
    } else if (message.body == "15") {
        message.reply(`Name: ${widow[4]["name"]}\n\nDescription: ${widow[4]["description"]}\n\n Press # for main Menue`);
    } else if (message.body == "16") {
        message.reply(`Name: ${widow[5]["name"]}\n\nDescription: ${widow[5]["description"]}\n\n Press # for main Menue`);
    }
    else {
        message.reply("Select an appropriate option !");
        message.reply(intro_txt);
    }
});

// sendWhatsappAlert(
//   "1.For sending hi 2.For sending bye 3.for greetings",
//   "+919987814689"
// );
// client.on("ready", async () => {
//   chatId = "123...@g.us";
//   const text = "some text";
//   await client.sendMessage(chatId, text);
//   await client.destroy(); // <----
// });
// client is done initializing, end the session
// async function endSession() {
// client.destroy();
// console.log("Client destroyed");
// }
// // end the session after 5 seconds
// setTimeout(endSession, 3000);
module.exports = sendWhatsappAlert;