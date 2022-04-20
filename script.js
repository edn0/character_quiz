
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
]

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
]


let answers = []; // This will store answers to calculate matching character

let q_number = 0; // This will be the progression counter

class q {
    constructor(q_number, prompt, attribute0, attribute1) {
        this.q_number = q_number;
        this.prompt = prompt;
        this.attribute0 = attribute0;
        this.attribute1 = attribute1;
    }

}

class answer {
    constructor(q_number, answer_value) {
        this.q_number = q_number;
        this.answer_value = answer_value;
    }
}

function show_slider() {
    var a = document.getElementById('slider');
    document.getElementById("score").innerHTML = a.value;
}

setInterval(show_slider, 200);

function start() {
    document.getElementById("button").onclick = submit();
}

function diff(a,b){return Math.abs(a-b);}


function compute_result() {
    for (let i=1; i < answers.length; i++) {
        // pour chaque perso
            //pour chaque reponse 1
    }
}

function compare_answer(q_number, answer_value) {
    for (let i=0; i < answers.length; ) {
        let difference = diff(answer_value, character[i].answer[q_number]);
        console.log(difference);
    }
    diff()
}

function submit() {
    if (q_number == 20) {
        compute_result();
        document.getElementById("button").value = "FINISHED";
        return;
    }

    let answer_value = document.getElementById("slider").value;

    document.getElementById("score").innerHTML = answer_value;

    console.log(answer_value);
    answers.push(answer_value);
    document.getElementById("question").innerHTML = questions[q_number];
    document.getElementById("attribute_0").innerHTML = attribute_left[q_number];
    document.getElementById("attribute_1").innerHTML = attribute_right[q_number];

    // For the first click (acting as a start btn)
    document.getElementById("score").style.opacity = 1;
    document.getElementById("question").style.opacity = 1;
    document.getElementById("slider").style.opacity = 1;

    document.getElementById("button").value = "SUBMIT";
    q_number = q_number+1;
    
    console.table(answers);

    compare_answer(q_number, answer_value);


}