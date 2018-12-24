$(document).ready(function () {
    var number = 31;
    var intervalId;
    var correctAns = 0;
    var wrong = 0;
    var unAns = 0;
    function hide() {
        $("#question").hide();
        $("#result-button").hide();
        $("#show-number").hide();
        $("#restart-button").hide();
    }
    hide();
    
    function show(){
        $("#question").show();
        $("#result-button").show();
        $("#show-number").show();
    }
    
    function showResult() {
        if ($('input[name=ans-one]:checked', '#questionOne').val() == 2) {
            correctAns++;
        } else if ($('input[name=ans-one]:checked', '#questionOne').val() == undefined) {
            unAns++;
        }
        else {
            wrong++;
        }
        if ($('input[name=ans-two]:checked', '#questionTwo').val() == 1) {
            correctAns++;
        } else if ($('input[name=ans-two]:checked', '#questionTwo').val() == undefined) {
            unAns++;
        }
        else {
            wrong++;
        }
        if ($('input[name=ans-three]:checked', '#questionThree').val() == 2) {
            correctAns++;
        } else if ($('input[name=ans-three]:checked', '#questionThree').val() == undefined) {
            unAns++;
        }
        else {
            wrong++;
        }
        if ($('input[name=ans-four]:checked', '#questionFour').val() == 1) {
            correctAns++;
        } else if ($('input[name=ans-four]:checked', '#questionFour').val() == undefined) {
            unAns++;
        }
        else {
            wrong++;
        }
        if ($('input[name=ans-five]:checked', '#questionFive').val() == 4) {
            correctAns++;
        } else if ($('input[name=ans-five]:checked', '#questionFive').val() == undefined) {
            unAns++;
        }
        else {
            wrong++;
        }
        $("#done").html("DONE!");
        $("#correct-ans").html("Correct Answer:" + "  " + correctAns);
        $("#wrong-ans").html("Wrong Answer:" + "  " + wrong);
        $("#un-ans").html("Unanswered:" + "  " + unAns);
        $("#restart-button").show();
    }
    
    function run() {
        intervalId = setInterval(decrement, 1000);
    }
    
    function decrement() {
        number--;
        $("#show-number").html("<h2>" + 'HURRY UP!' + " " + number + '  ' + 'Seconds' + "</h2>");
        if (number === 0) {
            stop();
            showResult();
            hide();
        }
    }
    function stop() {
        clearInterval(intervalId);
    }
    
    //   start game //
    $("#start-button").on("click", run);
    $("#start-button").on("click", function () {
        $("#start-button").hide();
        document.getElementById("header").style.marginTop = "30px";
       show();
    })
    $("#result-button").on("click", function () {
        stop();
        hide();
        showResult();
    })
    //end //

})