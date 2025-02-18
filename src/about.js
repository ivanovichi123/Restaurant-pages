function about () {
    const theContainer = document.querySelector("#content");
    theContainer.innerHTML = "";
    const theAboutContainer = document.createElement("div");
    theAboutContainer.classList.add("aboutContainer");
    const theAboutText = document.createElement("div");
    theAboutText.classList.add("aboutText");
    const theLogoContainer = document.createElement("div");
    theLogoContainer.classList.add("logoContainer");
    theAboutText.textContent = "This page is brought to you from Ivanovichi-s production";
    theAboutContainer.appendChild(theAboutText);
    theAboutContainer.appendChild(theLogoContainer);
    theContainer.appendChild(theAboutContainer);
};

export {about};