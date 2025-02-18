import { initialPageLoad } from "./initial-page"; 
import { about } from "./about";
import { menu } from "./menu";
import "./style.css";

function deployment () {
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const aboutButton = document.querySelector("#about");

    homeButton.addEventListener("click", () => {
        homeButton.style.backgroundColor = "#849483";
        menuButton.style.backgroundColor = "#FFDB58";
        aboutButton.style.backgroundColor = "#FFDB58";
        initialPageLoad();

    });

    menuButton.addEventListener("click", () => {
        homeButton.style.backgroundColor = "#FFDB58";
        menuButton.style.backgroundColor = "#849483";
        aboutButton.style.backgroundColor = "#FFDB58";
        menu();
    });

    aboutButton.addEventListener("click", () => {
        homeButton.style.backgroundColor = "#FFDB58";
        menuButton.style.backgroundColor = "#FFDB58";
        aboutButton.style.backgroundColor = "#849483";
        about();
    });

    homeButton.click();

}

deployment();