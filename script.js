
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
    "Like her, you have a strong affinity for justice and wish to be a part of making it better, in whatever way you can (perhaps even at the expense of some rules). You are stubborn and passionate, often misunderstood, but you have a loving heart. Only, your trust issues might prevent you from letting anyone see it.", // Katlynn
    "You have a great heart, but are afraid of it being broken again so you follow a certain set of rules to avoid that at any cost. You are adventurous and creative, and don’t mind being alone as much as you’ve found comfort in your own company.", // Elise
    "Like Charlie, you might have been called an emotional person before, and that’s okay. You are a passionate person that feels a lot, and gives back just as much to the people she loves. You are open-minded and kindhearted, but your demons may sometimes come back to haunt you and challenge your view on life.", // Charlie
    "Dug up any cadaver lately? Kidding. Hopefully. Like Vamir, you value logic and science above all : and can tend to be quite unrelenting on that topic. You are a charismatic person who, if they so desire to, could charm just about anyone. There’s a bit of a rebel in you that tends to defy your logical thinking, but you embrace it nonetheless.", // Vamir
    "The rebellious one! Like him, you value freedom above all and despise closed-minded rules. Rules in general, if we’re being honest. You’re charismatic and sarcastic, the life of the party. But while you can be described as unreliable from an outsider’s perspective, you are the opposite. As much as you care for your freedom, the people you value hold a great importance to you. They are the ones you would do anything for, even at your own expense. This short list, however, only contains those who have proven themselves as trustworthy.", // Ascal
    "Like Carenna, you appreciate the finer things in life. You don’t take life too seriously in general, especially how people regard you as you are fully aware of what your worth is. Your worst pet-peeve would be someone who prides themselves for things they did not earn themselves such as a job or else. You believe everything in life has to be earned, and that is where the value of everything lies. In how they were obtained. There is a little bit of a rebel in you, however, that is just waiting for a reason to come out.", // Carenna
    "You are an altruistic person who would sooner give than they would take, perhaps to a fault sometimes. Like Iris, you have a beautiful heart that often leads you to be the caretaker amongst your loved ones. You are extremely loyal, and it would take a lot for you to cross someone out of your life.",
    "As little as you worry about your own well-being, you seem to care about others. Even if, at times, you can prove to be selfish, you’ll always come around to admit your wrongdoings when due. You are a humorous and kind person, though at times chaotic. But most of the chaos in your life is at your own expense, as you try to shield others from it as much as possible. Like Beau, you tend to put others before yourself. For better or for worse.", // Beau
    "You may come off as discreet, but you rarely go unnoticed. Whether it be from your charm or your impeccable style, you are seen. You are witty and at times sarcastic, and perhaps tend to care more about appearances than you’d like. You tend to hover between arrogance and self-deprecation depending on your mood of the day. As volatile as you tend to be, or appear to be, you’d never betray someone you consider family.", // Omra
    "Like Monique, you are a deeply loyal person and it would take a lot for you to turn your back on someone you value. But if you do, things can get pretty chaotic quite easily. You are an emotional and passionate person, for the better or for the worse." // Monique
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
    "Beau Sinclair",
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
    document.getElementById("q_frame").style.height = "60px";


    for (let i=0; i < final_characters.length; i++) {

        document.getElementById("final_char_img")

        document.getElementById("final_char_img_" + i).src = "img/" + final_characters[i].character_ID + ".jpg";
        document.getElementById("final_char_name_" + i).innerHTML = final_characters[i].character_name;
        document.getElementById("final_char_desc_" + i).innerHTML = final_characters[i].character_description
        document.getElementById("final_char_" + i).style.opacity = 1;
        document.getElementById("final_char_desc_" + i).style.opacity = 1;
        document.getElementById("final_char_" + i).style.width = "128px";
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

setInterval(show_slider, 50);

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