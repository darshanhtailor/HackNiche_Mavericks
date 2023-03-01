const sendWhatsappAlert = require("./index");
let intro_message = "";
let message =
  "Select the following options: \n1.To get Job Updates\n2.Pension Calculator \n3.Counselling \n4.Apply for Finantial Aid \n5.Benefits for war Widows and child care services\n6.Army hospitals Near you \n7.Kendriya Vidyalay near me \n8.Information regarding mentee session \n9. In case of a panic attack press 9 \n 10. Pension Schemes Info\nPress # to display the main menue";

//
sendWhatsappAlert(message, "+919137962083", true);
sendWhatsappAlert(message, "+919769226107", true);
sendWhatsappAlert(message, "+919987814689", true);