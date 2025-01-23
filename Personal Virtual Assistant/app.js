let btn=document.querySelector("#btn");
let btnText=document.querySelector("#btnText");
let voiceGif=document.getElementById("voice");

let audioElement=new Audio('jarvis.mp3');

window.addEventListener('load', () => {
    // audioElement.play();
    speak("Initializing Machine");
    // wishMe();
    // setTimeout(()=>{ speak("Initializing Machine")},12000);
    
});

function speak(text){
    let textSpeak=new SpeechSynthesisUtterance(text);
    textSpeak.rate=1;
    textSpeak.pitch=1;
    textSpeak.volume=1;
    // textSpeak.lang="hi-GB";
    
    window.speechSynthesis.speak(textSpeak);
}


function wishMe(){
    let day=new Date();
    let hr=day.getHours();
    console.log(hr);
    if(hr>=0 && hr<12){
        speak("Good Morning Boss.How May I Help YOu");
    }else if(hr>=12 && hr<17){
        speak("Good Afternoon Boss. How May I Help You");
    }else{
        speak("Good Evening Boss. How May I Help YOu");
    }
}

let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition= new speechRecognition();

recognition.onresult= (event)=>{
    console.log(event);
    let currentIndex=event.resultIndex;
    let transcript=event.results[currentIndex][0].transcript;
    btnText.textContent=transcript;
    takeCommand(transcript.toLowerCase());
    // btnText.textContent="Click Here For Talk To Me";


};

try{
    btn.addEventListener("click",()=>{
        btn.style.display="none";
        voiceGif.style.display="flex";
        
        recognition.start();
    })
}catch(e){
}


function takeCommand(message){
    if(message.length===0){
        btn.style.display="flex";
        btnText.textContent="Sorry Try again"
        speak("sorry Try again");
    }
    btn.style.display="flex";
    voiceGif.style.display="none";
    if(message.includes('hey') || message.includes("hello")){
        speak("Hello Sir, How May I Help You?");
    }else if(message.includes("what is your name")|| message.includes("who are you")){
        speak("My Name is Jarvis Created By Shubham Gatkal");
    // btnText.textContent="Click Here For Talk To Me";

    }else if(message.includes("shubham gatkal")|| message.includes("who is shubham gatkal") || message.includes("shubham")){
        speak("Shubham Gatkal is Full Stack Developer Who created me. You can check There Linkdin Profile opened in front of you");
        window.open("https://www.linkedin.com/in/shubhamgatkal1110/");
    }else if(message.includes("open google")){
        window.open("https://google.com");
        speak("opening Google");
    }else if (message.includes("open youtube")){
        window.open("https://youtube.com")
        speak("opening youtube");
    }else if(message.includes("open instagram")){
        window.open("https://instagram.com")
        speak("opening Instagram");
    }else if(message.includes("open calculator")){
        window.open("Calculator:///");
        speak("opening Calculator");
    }else if(message.includes("open vs code")){
        window.open("C:\Users\gatka\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Visual Studio Code");
        speak('opening VS code');
    }else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    }else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    }else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    }else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}