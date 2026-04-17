$(".hide-btn").click(function () {
    $(".text1").hide(1000);
})

$(".show-btn").click(function () {
    $(".text1").show(1000);
    $(".text1").css("color", "red");
})
$(".toggle-btn").click(function () {
    $(".text1").toggle();
})

$(".fade-in").click(function () {
    $(".text2").fadeIn(1000);
})

$(".fade-out").click(function () {
    $(".text2").fadeOut(1000);
})

$(".fade-toggle").click(function () {
    $(".text2").fadeToggle(1000);
})

$(".slide-down").click(function () {
    $(".text3").slideDown(1000);
})

$(".slide-up").click(function () {
    $(".text3").slideUp(1000);
})

$(".slide-toggle").click(function () {
    $(".text3").slideToggle();
})

// animation
$(".ani-btn").click(function(){
    $(".box-1")+$(".box-a").stop().animate({
        left: '+=250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
})

let mot =$(".mot-btn");
let anibox = $(".box-2");

mot.click(function(){
    anibox.animate({
        height: '300px',
        opacity: '0.5',
    },1000);
    anibox.animate({
        width: '300px',
        opacity: '0.8',
        fontSize: '3em'
    },1000);
    anibox.animate({
        height: '100px',
        opacity: '0.5',
    },1000);
    anibox.animate({
        width: '100px',
        opacity: '1',
        fontSize: '1rem'
    },1000);
})
