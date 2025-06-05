// scripts.js
// Handles all interactive features for Try Me

const answers = [
    "Yes!", "No!", "Maybe!", "Try again later!", "Absolutely!", "Not a chance!", "Definitely!", "Very doubtful!"
];
function getRandomAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById("result").textContent = answers[randomIndex];
}

fun

const phrases = [
    "Build a rocketship!",
    "Take a break!",
    "Make something meaningful!",
    "Coding something challenging!",
    "Create a new website!",
    "Run a marathon!",
    "Try something out of your comfort zone!",
    "Learn a new skill!",
    "Explore the world!",
    "Write a book!",
    "Cook a new recipe!",
    "Paint a masterpiece!",
    "Start a new hobby!",
    "Volunteer for a cause!",
    "Travel to a new place!",
    "Start a garden!",
    "Learn a new language!",
    "Join a club!",
    "Take a photography class!",
    "Attend a workshop!",
    "Go on an adventure!",
    "Create a podcast!",
    "Write a song!",
    "Dance like nobody's watching!",
    "Embrace the unknown!",
    "Challenge yourself every day!",
    "Make a difference in someone's life!",
    "Live life to the fullest!",
    "Find joy in the little things!",
    "Laugh often and love deeply!",
    "Cherish every moment!",
    "Dream big and dare to fail!",
    "Believe in yourself and your dreams!",
    "Make today count!",
    "Create your own path!",
    "Inspire others with your actions!",
    "Leave a legacy of kindness!",
    "Be the change you wish to see in the world!",
    "Follow your passion!",
    "Never stop learning!",
    "Stay curious and adventurous!",
    "Embrace the journey!",
    "Seek out new experiences!",
    "Challenge your limits!",
    "Find beauty in simplicity!",
    "Create your own happiness!",
    "Live with purpose!",
    "Make every day an adventure!",
    "Discover the magic in everyday life!"
];
function displayRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("phrase").textContent = phrases[randomIndex];
}

const ideas = [
    "Paint something using only 3 colors.",
    "Write a haiku about your breakfast.",
    "Take a photo of something ordinary and make it look epic.",
    "Write a 2-minute monologue for a fictional villain.",
    "Draw your favorite animal from memory.",
    "Invent a new holiday and describe how it's celebrated.",
    "Create a comic strip with stick figures.",
    "Write a letter to your future self.",
    "Design a logo for a made-up company.",
    "Describe a day in the life of a superhero's sidekick."
];

function displayRandomIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    const phraseElem = document.getElementById("phrase");
    if (phraseElem) {
        phraseElem.textContent = ideas[randomIndex];
    }
}

function generateRandomNumber() {
    const random = Math.floor(Math.random() * 100) + 1;
    const numberElem = document.getElementById("random-number");
    if (numberElem) {
        numberElem.textContent = random;
    }
}
