
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

let character_description = [
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       
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
    [80,95,45,25,65,70,75,55,95,15,70,35,45,5,45,10,80,70,15,35], // Charlie
    [5,0,20,100,0,80,40,10,5,45,90,80,95,100,60,45,5,5,95,80], // Vamir
    [65,85,0,30,75,20,60,35,65,100,85,0,5,0,95,0,0,95,20,20], // Ascal
    [15,10,10,40,35,90,45,30,10,55,100,40,80,75,55,35,15,15,55,60], // Carenna
    [85,60,60,60,100,30,65,75,60,65,55,45,10,45,35,40,90,100,0,95], // Iris
    [30,75,15,5,60,95,20,5,85,5,40,5,60,55,80,20,20,55,80,45], // Beau
    [10,65,0,65,10,25,35,15,15,20,75,30,85,20,90,25,25,45,45,85], // Omra
    [45,100,55,0,55,100,0,15,100,0,25,100,70,25,5,5,30,0,10,0] // Monique
]

class Character {
    constructor(character_ID, character_name, answers, match_score, character_description) {
        this.character_ID = character_ID;
        this.character_name = character_name;
        this.answers = answers;
        this.match_score = match_score;
        this.character_description = character_description;
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

let final_characters = [];
let final_score = [];
function compute_result() {
    console.log("// Final");

    for (let i=0; i < characters.length; i++) {
        if (characters[i].match_score > 3) {
            final_characters.push(characters[i]);
        }
    }
    
    document.getElementById("a_frame").style.opacity = 1;
    document.getElementById("a_frame_desc").style.opacity = 1;


    for (let i=0; i < final_characters.length; i++) {

        document.getElementById("final_char_img")

        document.getElementById("final_char_img_" + i).src = "img/" + final_characters[i].character_ID + ".jpg";
        document.getElementById("final_char_name_" + i).innerHTML = final_characters[i].character_name;
        document.getElementById("final_char_desc_" + i).innerHTML = final_characters[i].character_description
    }

    document.getElementById("a_frame_desc").style.opacity = 1;



    console.table(final_characters);

}

let t = [];


let difference = []; // This list will contain the difference between the player's answer and every character's answer


function compare_answer(player_answer, q_number) {


    for (let i=0; i < characters.length; i++) {
        let d = diff(player_answer.answer_value, characters[i].answers[q_number -1]);
        difference = [ [d] , characters[i]]; // difference and character_ID
        t.push(difference);

    }
    
    t.sort();
    let matching_char = t[0];

    let matching_char_name = matching_char[1].character_name

    let matching_char_num = matching_char[1].character_ID

    console.log(matching_char_num + " // ID")
    console.log("Answer matches with " + matching_char_name);

    let score_up_ID = matching_char[1].character_ID;

    characters[score_up_ID].match_score = characters[score_up_ID].match_score + 1;

    difference = [];
    t = [];


}

function show_slider() {
    var a = document.getElementById('slider');
    document.getElementById("score").innerHTML = a.value;
}

setInterval(show_slider, 200);

function next_q() {

    document.getElementById("question").innerHTML = questions[q_number];
    document.getElementById("attribute_0").innerHTML = attribute_left[q_number];
    document.getElementById("attribute_1").innerHTML = attribute_right[q_number];
    q_number = q_number+1;
}

let game_started = false;

function submit() {

    if (q_number <= 0 && game_started == false) { // Creates character objects at the start of the game

        for (let i=0; i < characters_name.length; i++) {
            let c = new Character(i, characters_name[i], character_answers[i], 0, character_description[i]);
            characters.push(c);
            game_started = true;
        }

          // For the first click (acting as a start btn)
        document.getElementById("score").style.opacity = 1;
        document.getElementById("question").style.opacity = 1;
        document.getElementById("slider").style.opacity = 1;

        document.getElementById("button").value = "SUBMIT";
    }

    if (q_number == 20) {
        document.getElementById("button").value = "FINISHED";
        document.getElementById("score").style.opacity = 0;
        document.getElementById("attribute_0").style.opacity = 0;
        document.getElementById("attribute_1").style.opacity = 0;
        document.getElementById("question").innerHTML = "Here is your result :";
        document.getElementById("slider").style.opacity = 0;

        compute_result();
        return;
    }

    let answer_value = document.getElementById("slider").value;


    if (q_number >= 1) {
        player_answers.push(answer_value);

        let player_answer = new Answer(q_number, answer_value, "Player");
        compare_answer(player_answer, q_number);
    }


    next_q();


}