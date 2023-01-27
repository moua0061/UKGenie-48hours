function getBotResponse(input){

    let greetingMessage = "Hello, how can I help you today?";
    let iCanHelpYouWithThatMessage = "I can help you with that.";
    let howToAccessPTOmessage = "Here is how you can access your total PTO hours: ";
    let navigationToHowToAccessPTOmessage = "On your left, click 'Benefits'. Then select 'PTO Plans'. There, you should find your total PTO hours.";
    let pleasureReminderMessage = "It was a pleasure. Remember, I'm always here. If you need me again, just click on the chat bar on the bottom to call me. ";
    let haveAWonderfulDaymessage = "Have a wonderful day!";
    let youreWelcomeMessage = "You're welcome. Anything else I can help you with?";

    switch (input) {
        case "hello":
            return greetingMessage;
            break;
        case "How can I find my total PTO hours?":
            return iCanHelpYouWithThatMessage + howToAccessPTOmessage + navigationToHowToAccessPTOmessage;
            break;
        case "Thank you":
            return youreWelcomeMessage;
            break;
        case "no":
            return pleasureReminderMessage + haveAWonderfulDaymessage;
            break;
        case "goodbye":
            return haveAWonderfulDaymessage;
            break;
        case "what time is it?":
            let time = getTime();
            return time;
            break;
        default:
            return "I'm sorry. Please try asking something else.";
    }

    // if(input == "hello"){
    //     return "Hello, how can I help you today?";
    // } else if(input == "How can I find my total PTO hours?"){
    //     return message1 + message2;
    // } else if(input == "Thank you"){
    //     return "You're welcome. Anything else I can help you with?";
    // } else if(input == "no"){
    //     return message3 + message4;
    // } else if(input == "goodbye"){
    //     return message4;
    // } else if(input == "what time is it?"){
    //     let time = getTime();
    //     return time;
    // }
    // else {
    //     return "I'm sorry. Please try asking something else.";
    // }
}