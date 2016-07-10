/*document.getElementById("first_a1").onmouseover = function () {
    document.getElementById("first_a1").style.background = "url('img/nav/small_menu_icon.png')";
    document.getElementById("first_a1").style.backgroundRepeat = "no-repeat";
    document.getElementById("first_a1").style.backgroundPosition = "3px 3px";
    document.getElementById("menu_pop").style.top = "45px";
};*/

/*document.getElementById("first_a1").onmouseout = function() {
    document.getElementById("first_a1").style.background = "url('img/nav/menu_icon.png')";
    document.getElementById("first_a1").style.backgroundRepeat = "no-repeat";
    document.getElementById("first_a1").style.backgroundPosition = "top left";
    document.getElementById("menu_pop").style.top = "-200px";
}*/
//**********************************************************************************************************************

function showMenu(){
    document.getElementById("first_a1").style.background = "url('img/nav/small_menu_icon.png')";
    document.getElementById("first_a1").style.backgroundRepeat = "no-repeat";
    document.getElementById("first_a1").style.backgroundPosition = "3px 3px";
    document.getElementById("menu_pop").style.top = "45px";
}

function hideMenu(){
    document.getElementById("first_a1").style.background = "url('img/nav/menu_icon.png')";
    document.getElementById("first_a1").style.backgroundRepeat = "no-repeat";
    document.getElementById("first_a1").style.backgroundPosition = "top left";
    document.getElementById("menu_pop").style.top = "-200px";
}

