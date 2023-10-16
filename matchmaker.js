console.log("Starting Matchmaker...");

function CalculateCompatibility() {
    console.log("CalculateCompatibility()");

    const DESIRED_RESPONSE = [
        5, /* Strongly Agree */
        4, /* Agree */
        5, /* Strongly Agree */ 
        5, /* Strongly Agree */
        1, /* Strongly Disagree */
    ]

    const MAX_SCORE = 25;


    let Question1Response = document.getElementById("q1").selectedOptions[0].value;
    let Question2Response = document.getElementById("q2").selectedOptions[0].value;
    let Question3Response = document.getElementById("q3").selectedOptions[0].value;
    let Question4Response = document.getElementById("q4").selectedOptions[0].value;
    let Question5Response = document.getElementById("q5").selectedOptions[0].value;


    console.log("Question 1 Answers:")
    console.log(document.getElementById("q1").selectedOptions[0].text);
    console.log(document.getElementById("q1").selectedOptions[0].value);
    console.log(Question1Response);

    console.log("Question 2 Answers:")
    console.log(document.getElementById("q2").selectedOptions[0].text);
    console.log(document.getElementById("q2").selectedOptions[0].value);
    console.log(Question2Response);

    console.log("Question 3 Answers:")
    console.log(document.getElementById("q3").selectedOptions[0].text);
    console.log(document.getElementById("q3").selectedOptions[0].value);
    console.log(Question3Response);

    console.log("Question 4 Answers:")
    console.log(document.getElementById("q4").selectedOptions[0].text);
    console.log(document.getElementById("q4").selectedOptions[0].value);
    console.log(Question4Response);

    console.log("Question 5 Answers:")
    console.log(document.getElementById("q5").selectedOptions[0].text);
    console.log(document.getElementById("q5").selectedOptions[0].value);
    console.log(Question5Response);

    let Question1Compatibility = 5 - Math.abs(Question1Response - DESIRED_RESPONSE[0]);
    let Question2Compatibility = 5 - Math.abs(Question2Response - DESIRED_RESPONSE[1]);
    let Question3Compatibility = 5 - Math.abs(Question3Response - DESIRED_RESPONSE[2]);
    let Question4Compatibility = 5 - Math.abs(Question4Response - DESIRED_RESPONSE[3]);
    let Question5Compatibility = 5 - Math.abs(Question5Response - DESIRED_RESPONSE[4]);

    console.log("c1="+Question1Compatibility);
    console.log("c2="+Question2Compatibility);
    console.log("c3="+Question3Compatibility);
    console.log("c4="+Question4Compatibility);
    console.log("c5="+Question5Compatibility);

    let TotalCompatibility = Question1Compatibility + Question2Compatibility + Question3Compatibility + Question4Compatibility + Question5Compatibility;

    TotalCompatibility *= 100 / MAX_SCORE;
    TotalCompatibility = Math.round(TotalCompatibility);
    console.log("tc="+ TotalCompatibility);


    document.getElementById("Compatibility").innerHTML = "Your compatibility is: " + TotalCompatibility;
}
