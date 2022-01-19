
$("h1").addClass("big-title margin-50");
$("h1").text("Good bye");


// $("h1").removeClass("big-title");

// console.log($("h1").hasClass("margin-50"));
$("button").text("Don't click me");

$("h2").html("<em>Hey I'm in em</em>")

console.log($("img").attr("src"));
$("a").attr("href","https://www.google.com");

//events
$("h1").click(function () { 
    $("h1").css("color","red");
    
});

$("button").click(function(){
    $("h1").css("color","blue");
});

$("input").keypress(function (e) { 
    console.log(e.key)
});

$(document).keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover",function(){
    $("h1").css("color","green");
});

//agregando elementos con jq
$("h1").before("<button>Hello from jq</button>");
$("h1").after("<button>Hi from jq</button>")
$("h1").prepend("<button>i'm prepend</button>");
$("h1").append("<button>i'm append</button>");