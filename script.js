console.log("I'm working");

var fruit = "apples are wonderful";
console.log(fruit);

var year = 2023;
console.log(year);

window.onload = function(){
    $(".title").css("color", "red");
    $(".green-box").click(changeColor);

    for (var i = 0; i < 100; i++){
        var worm = $('<img class="worm" src="images/diglet.webp">');
    
        var randTop = Math.random() * window.innerHeight;
        var randLeft = Math.random() * window.innerWidth;
    
        $(worm).css("top", randTop+"px");
        $(worm).css("left", randLeft+"px");
    
        $("body").append(worm);
    }
}

function changeColor(){
    $(".green-box").css("height", "500px");
    $(".green-box").css("width", "500px");
    $(".green-box").css("left", "800px");
    $(".green-box").css("background", "purple");
}

function showDialogue(){
    $(".dialogue").css("display", "block");
}

function hideDialogue(){
    $(".dialogue").css("display", "none");
}

function wormMove(){
    $(".worm").each(function(){
        var randTop = Math.random() * window.innerHeight;
        var randLeft = Math.random() * window.innerWidth;
    
        $(this).css("top", randTop+"px");
        $(this).css("left", randLeft+"px");
    })  
}

$(".rock").draggable();

setInterval(wormMove, 4500);

$(".rock").click(showDialogue);
$(".dialogue").click(hideDialogue);




// function seedGrow(){
//     $(".seed").attr("src", "images/venasaur.png");
//     $(".seed").css("height", "300px");
//     $(".seed").css("top", "410px");
//     $(".seed").css("left", "210px");
// }

// function seedDies(){
//     $(".seed").attr("src", "images/bulbasaur.png");
//     $(".seed").css("height", "100px");
//     $(".seed").css("top", "500px");
//     $(".seed").css("left", "300px");
// }

// $(".seed").hover(seedGrow, seedDies);