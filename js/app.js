$(function() {


    var current = 0;

    var questions = [{
        label: 'Question 1: What has been the most ridiculous event that occurred which started a war?',
        options: ['Conflict over stolen flip-flops', 'Soccer game result dispute', 'War over a bucket', 'Dictator angry about losing in Mortal Kombat'],
        answer: 2,
        img: 'img/bucket.png'
    }, {
        label: 'Question 2: adfasf',
        options: [1, 2, 3, 4],
        answer: 2,
        img: 'img/bucket.png'
    }, {
        label: 'Question 3: adfasf',
        options: [1, 2, 3, 4],
        answer: 2,
        img: 'img/bucket.png'
    }, {
        label: 'Question 4: adfasf',
        options: [1, 2, 3, 4],
        answer: 2,
        img: 'img/bucket.png'
    }, {
        label: 'Question 5: adfasf',
        options: [1, 2, 3, 4],
        answer: 2,
        img: 'img/bucket.png'
    }]


    $('.Start').click(function() {
        $('.StartPage').empty();
        document.getElementById("simple").style.display = "block";
        document.getElementById("Submit").style.visibility = "visible";
    })

    $('.simple').append("<h1>" + questions[
        current].label + "</h1>")
    for (var i = 0; i < questions[
        current].options.length; i++) {
        $('.simple').append("<input type='checkbox' id='checkbox'/>" + questions[
            current].options[i] + ' </br> ')
    }
    $('.simple').on("click", function() {

    })


    $('.Submit').click(function() {
        $('.simple').empty();
        $('.simple').append("<h1>" + questions[
            current].answer + "</h1>")
        $('.simple').append("<img src='questions[current].img'>")
        document.getElementById("Next").style.visibility = "visible";
        document.getElementById("Submit").style.visibility = "hidden";
        document.getElementById("Answer").style.visibility = "visible";

    })

    $('.Next').click(function() {
        current++;
        $('.simple').empty();
        $('.simple').append("<h1>" + questions[
            current].label + "</h1>")
        for (var i = 0; i < questions[
            current].options.length; i++) {
            $('.simple').append("<input type='checkbox' id='checkbox/>" + questions[current].options[i] + ' </br> ')
        }
        document.getElementById("Next").style.visibility = "hidden";
        document.getElementById("Submit").style.visibility = "visible";
        document.getElementById("Answer").style.visibility = "hidden";

    })


});