/**this function is hiding first parameter and showing the second **/
function showElement(show, hide) {
    console.log(score, show, hide)
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "inline-block";
}

let score = 0;
/** this function is returning the value of points and
* disables the submit buttons */
function submitCharacter(AnswerX, btnX, scoreX) {

         validateForm(AnswerX);
    score = pointsValidation(AnswerX);
    let msg = "Total score: "  + score +   " out of 900 points";
    document.getElementById(scoreX).innerHTML = msg;
    /*const element=document.getElementsByClassName("ScoreX");//.innerHTML = msg;
    element.innerHTML= msg;*/
    document.getElementById(btnX).disabled="true"
    document.getElementById(AnswerX).value=""
}

function submitQuestion(AnswerX, btnX, scoreX) {
    validateForm(AnswerX);
    score = pointsValidation(AnswerX);
    let msg = "Total score: " + score + " out of 900 points";
    document.getElementById(scoreX).innerHTML = msg;
    //document.getElementsByClassName("ScoreX").innerHTML = msg;
    document.getElementById(btnX).disabled = "true"
    document.getElementById(AnswerX).value = ""



}
/** function updates score when a picture is clicked */
function clickedPicture(pic, scoreP) {
    let pictures = ["img1", "img3", "img6", "img8", "img10"]
    let y = getRandomIntInclusive(-10, 80);
    if (pictures.includes(pic)) {
        score = score + y;
    } else {
        score = score - y;
    }
    let msg = "Total score: " + score + " out of 900 points";
    document.getElementById(scoreP).innerHTML = msg;
    document.getElementById("img1").disabled = "true"
    document.getElementById("img2").disabled = "true"



}
/** function to validate user input */
function validateForm(AnswerX) {
    let answer = document.getElementById(AnswerX).value;
    if (answer == "" || answer == undefined) {
        alert("fill the form before submitting");
        return false;
    }
}
/** function updates score based on user answers */
function pointsValidation(AnswerX) {
    const submitChar = ["padlock", "padlock key", "chains", "jug of water", "golden dagger",
        "sharp sword", "kingdom map", "encrusted shield", "seal", "crown", "sceptre", "jewelry",
        "golden crosses", "ancient scroll", "prayer book", "candle", "helmet", "axe", "shield",
        "hammer", "spears"];
    const submitEnemy = ["Sam", "sam", "oasis", "Oasis", "anchor", "Anchor", "Stone Keep", "Stone keep", "stone keep", "Windsor Castle"];
    let updateScore = 0;
    let x = getRandomIntInclusive(50, 80)
    let answer = document.getElementById(AnswerX).value
    if (submitChar.includes(answer)) {
        updateScore = score + x;
    } else if (submitEnemy.includes(answer)) {
        updateScore = score + x;
    } else if (!submitChar.includes(answer)) {
        updateScore = score;
    } else if (!submitEnemy.includes(answer)) {
        updateScore = score;
    }
    return updateScore;
}
/** function updates score based on user answers */
function questionPoints(AnswerX) {
    const submitEnemy = ["Sam", "sam", "oasis", "Oasis", "anchor", "Anchor", "Stone Keep", "Stone keep", "stone keep"];
    let updateScore = 0;
    let x = getRandomIntInclusive(50, 80)
    let answer = document.getElementById(AnswerX).value
    if (submitEnemy.includes(answer)) {
        updateScore = score + x;
    } return updateScore
}
/**function generates random integer numbers */
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}




