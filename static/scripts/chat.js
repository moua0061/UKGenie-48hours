// //collapsible
// var collapsible = document.getElementsByClassName("collapsible");
//
// for(let i = 0; i < collapsible.length; i++){
//     collapsible[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//
//         var content = this.nextElementSibling;
//
//         if(content.style.maxHeight){
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     })
// }
//
// function getTime(){
//     let today = new Date();
//     hours = today.getHours();
//     minutes = today.getMinutes();
//
//     if(hours < 10){
//         hours = "0" + hours; //05:19 instead of 5:19
//     }
//     if(minutes < 10){
//         minutes = "0" + minutes;
//     }
//
//     let time = hours + ":" + minutes;
//     return time;
// }
//
// function firstBotMessage(){
//     let firstMessage = "Hello. I'm UKGenie. How can I help you today?"
//     document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>'
//
//     let time = getTime();
//     $("#chat-timestamp").append(time);
//     document.getElementById("userInput").scrollIntoView(false);
// }
//
// firstBotMessage();
//
// //retrieves the responses
// function getHardCodedResponse(userText){
//     let botResponse = getBotResponse(userText);
//     let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
//     $("#chatbox").append(botHtml);
//
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// }
//
// //gets the responses from the user input & processes it
// function getResponse(){
//     let userText = $("#textInput").val();
//     if(userText == ""){
//         userText = "UKGenie is the best!"
//     }
//     let userHTML = '<p class="userText"><span>' + userText + '</span></p>'
//     $("#textInput").val("");
//     $("#chatbox").append(userHTML);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
//     setTimeout(() => {
//         getHardCodedResponse(userText);
//     }, 1000);
// }
//
// function buttonSendText(sampleText){
//     let userHTML = '<p class="userText"><span>' + sampleText + '</span></p>'
//     $("#textInput").val("");
//     $("#chatbox").append(userHTML);
//     document.getElementById("chat-bar-bottom").scrollIntoView(true);
// }
//
// function sendButton(){
//     getResponse();
// }
//
// function heartButton(){
//     buttonSendText("You heart this conversation!")
// }
//
// //press enter to send a message
// $("#textInput").keypress(function(e){
//     if(e.which == 13){
//         getResponse();
//     }
// })
//
// // $("textInput").onkeypress(function(e){
// //     if(e.which == 13){
// //         getResponse();
// //     }
// // })