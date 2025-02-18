function initialPageLoad () {
    const theContainer = document.querySelector("#content");
    theContainer.innerHTML = "";
    const theRealContainer = document.createElement("div");
    const restaurantNameContainer = document.createElement("header");
    theRealContainer.classList.add("homeContainer");
    // Restaurant name start
    restaurantNameContainer.classList.add("restaurantName");
    const nameText = document.createElement("p");
    nameText.classList.add("initialPageRestaurantName");
    nameText.textContent = "Ivanovichi-s restaruant";
    restaurantNameContainer.appendChild(nameText);
    theRealContainer.appendChild(restaurantNameContainer);
    //Restaurant name end
    //Slogan start
    const theSloganContainer = document.createElement("div");
    theSloganContainer.classList.add("sloganContainer")
    const theSlogan = document.createElement("p");
    theSlogan.classList.add("theSlogan");
    theSlogan.textContent = "The best restaurant in the country";
    theSloganContainer.appendChild(theSlogan);
    theRealContainer.appendChild(theSloganContainer);
    //Slogan end
    theContainer.appendChild(theRealContainer);
};
export{initialPageLoad};