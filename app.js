const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Mou...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Dear...");
    } else {
        speak("Good Evening Madam...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing ByteBuddy...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Ma'am, How May I Help You?");
    } else if (message.includes('wish') || message.includes('wish me')) {
            var day = new Date();
            var hour = day.getHours();
            if (hour >= 0 && hour < 12) {
                speak("Good Morning Mou...");
            } else if (hour >= 12 && hour < 17) {
                speak("Good Afternoon Dear...");
            } else {
                speak("Good Evening Madam...");
            }
    } else if (message.includes("how are you")) {
            speak("I am good, Thankyou for asking. How are you?");
        } else if (message.includes("who is your owner")|| message.includes("name of your owner") 
            || message.includes("owner") || message.includes("who created you")) {
            speak("Mou Samaddar ma'am is my owner");
        } else if (message.includes("what is your name") || message.includes("who are you") || message.includes("your name") )  {
            speak("I am ByteBuddy. I am your virtual assisant. Please tell me how can I help you?");
    } else if (message.includes("thankyou")) {
            speak("You're Welcome");
    } else if (message.includes("good") ||message.includes("fine") ) {
            speak("Glad to know this");
    } else if (message.includes("open google") || message.includes("google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")|| message.includes("youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open instagram") || message.includes("instagram") ) {
        window.open("https://www.instagram.com/", "_blank");
        speak("Haa haa chalalo reels. Opening instagram....");
    } else if (message.includes("open facebook") || message.includes("facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {  year:"numeric" , month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else if (message.includes('joke')) {
        window.open('https://www.rd.com/list/short-jokes/');
        const finalText = " ha ha ha!! You can refer to this website for intresting jokes";
        speak(finalText);
    } else if (message.includes('sing') || message.includes('song') || message.includes('spotify')) {
        window.open('https://open.spotify.com/');
        const finalText = "Ahh haan, I can't sing but he can. Enjoy the best songs over here";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}

