const openSide = $("#open-side"), 
    closeSide = $("#close-side"),
    sideBar = $("#side-bar"),
    overlay = $(".overlay"), 
    homeButton = $("#home-btn");

const scrollHandler = () => {
    if ($(document).scrollTop() === 0) {
        homeButton.removeClass("flex").addClass("hidden");
    }
    else {
        homeButton.removeClass("hidden").addClass("flex");
    }
}

const backToHomeHandler = () => {
    $(document).scrollTop(0);
}

const openSideHandler = () => {
    sideBar.removeClass("-left-64").addClass("left-0");
    overlay.removeClass("hidden");
}

const closeSideHandler = () => {
    sideBar.removeClass("left-0").addClass("-left-64");
    overlay.addClass("hidden");
}

overlay.click(closeSideHandler);
closeSide.click(closeSideHandler);
openSide.click(openSideHandler);
homeButton.click(backToHomeHandler);
$(document).scroll(scrollHandler);