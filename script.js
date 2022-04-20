
let questions = [
    "Would you take what you wanted at the expense of others?",
    "What most influences your decisions?",
    "During a presentation, would you rather take the lead or let someone else do the talking?",
    "Does your life most resemble a rave or a well-organized office?",
    "Do you think everything you have, you could have gotten without any outside help?",
    "How quick are you to resorting to violence?",
    "How likely are you to act solely on impulses?",
    "Would you say you have self-control?",
    "In a project, how would you react if one of the participants didn’t put in as much effort as the others?",
    "Have you come to terms with your past?",
    "Do you put a lot of importance in how you dress?",
    "Would you describe yourself as an extrovert?",
    "Halo or horns?",
    "Which do you value most?",
    "Are you the type to follow the rules?",
    "Are you afraid to step out of your comfort zone?",
    "Which of these best describe you when confronted with an uncomfortable situation?",
    "Would you describe yourself as the mom of your friend group?",
    "Would you consider yourself a reliable person?",
    "Would you rather let someone else do what you could do, rather than doing them yourself?"
];

let attribute_left = [
    "YES",
    "HEAD",
    "LEAD",
    "RAVE",
    "YES",
    "NOT AT ALL",
    "VERY",
    "NO",
    "CALL THEM OUT",
    "NO",
    "NO",
    "YES",
    "HALO",
    "ART",
    "YES",
    "NO",
    "SARCASM",
    "NO",
    "YES",
    "YES"
];

let attribute_right = [
    "NO",
    "HEART",
    "STEP DOWN",
    "OFFICE",
    "NO",
    "VERY",
    "NEVER",
    "YES",
    "IGNORE THEM",
    "YES",
    "YES",
    "NO",
    "HORNS",
    "SCIENCE",
    "NO",
    "YES",
    "HONESTY",
    "YES",
    "NO",
    "NO"
];

let characters = [];

let characters_name = [
    "Katlynn Maddox",
    "Elise Woods",
    "Charlie Tenelth",
    "Vamir Erfolg",
    "Ascal Vetag",
    "Carenna Zakog",
    "Iris Valentine",
    "Beain Sinclair",
    "Omra Danann",
    "Monique Dancer"
]

let character_answers = [
    [45,25,5,80,5,60,10,0,20,10,95,55,55,15,100,15,10,10,65,55], // Katlynn
    [75,55,70,75,70,15,80,95,0,80,45,85,20,10,20,55,95,80,5,100], // Elise

]

class Character {
    constructor(character_ID, character_name, answers) {
        this.character_ID = character_ID;
        this.character_name = character_name;
        this.answers = answers;
    }
}

let player_answers = []; // This will store player answers to calculate matching character

let q_number = 0; // This will be the progression counter

class Q {
    constructor(q_number, prompt, attribute0, attribute1) {
        this.q_number = q_number;
        this.prompt = prompt;
        this.attribute0 = attribute0;
        this.attribute1 = attribute1;
    }

}
class Answer {
    constructor(q_number, answer_value, character_ID) {
        this.q_number = q_number;
        this.answer_value = answer_value;
        this.character_ID = character_ID;
    }
}

function diff(a,b){return Math.abs(a-b);}

function compute_result() {
    for (let i=1; i < player_answers.length; i++) {
        // pour chaque perso
            //pour chaque reponse 1
    }
}

let difference = []; // This list will contain the difference between the player's answer and every character's answer
function compare_answer(player_answer) {

    for (let i=0; i < player_answers.length; i++) {

        let d = diff(player_answer.answer_value, characters[i].answer[q_number]);
        console.log(d);
        difference.push(d);

    }

    console.log(difference)
}

function show_slider() {
    var a = document.getElementById('slider');
    document.getElementById("score").innerHTML = a.value;
}

setInterval(show_slider, 200);



function submit() {

    if (q_number <= 0) { // Creates character objects at the start of the game

        for (let i=0; i < characters_name.length; i++) {
            let c = new Character(i, characters_name[i], character_answers[i]);
            characters.push(c);
        }
        console.log(characters);
    }

    if (q_number == 20) {
        document.getElementById("button").value = "FINISHED";
        document.getElementById("score").style.opacity = 0;
        document.getElementById("question").innerHTML = "Here is your result :";
        document.getElementById("slider").style.opacity = 0;

        compute_result();
        return;
    }


    let answer_value = document.getElementById("slider").value;

    document.getElementById("score").innerHTML = answer_value;

    console.log(answer_value);
    if (q_number > 0) {
        player_answers.push(answer_value);
    }
    console.table(player_answers);

    document.getElementById("question").innerHTML = questions[q_number];
    document.getElementById("attribute_0").innerHTML = attribute_left[q_number];
    document.getElementById("attribute_1").innerHTML = attribute_right[q_number];

    // For the first click (acting as a start btn)
    document.getElementById("score").style.opacity = 1;
    document.getElementById("question").style.opacity = 1;
    document.getElementById("slider").style.opacity = 1;

    document.getElementById("button").value = "SUBMIT";
    q_number = q_number+1;
    
    let player_answer = new Answer(q_number, answer_value, "Player");
    compare_answer(player_answer);


}