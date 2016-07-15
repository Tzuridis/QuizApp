$(document).ready(function() {
        $(".Start").click(function() {
            document.getElementById("page1").style.display = "none";
           document.getElementById("page2").style.display = "block";
        })
        $(".Submit").click(function() {
            document.getElementById("page2").style.display = "none";
           document.getElementById("page3").style.display = "block";
        })
        $(".Next").click(function() {
            document.getElementById("page3").style.display = "none";
           document.getElementById("page4").style.display = "block";
        })
       
    })

function answers () {

}

function tally () {
	
}