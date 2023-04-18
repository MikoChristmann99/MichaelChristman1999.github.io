/*
   ==================================================
   Title: web-330/week-1/theme.js
   Author: Michael Christman
   Date: March 18th, 2023
   Description: JavaScipt code which allows the user to switch the theme of the landing page.
   =================================================
*/
setDefaultTheme();


function setDefaultTheme() {
    // Variables are looking at local storage to determine theme
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    // Setting theme, iconMode, and iconText based on browser storage
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}


//Set the HTML body to the user's selected theme. 
//If one has not been selected, set the theme to light-theme.
/*function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}*/


function toggleMode(x)
{
    let colorTheme = document.body.classList;
    let iconMode = x.classList; 

    /**
     * If the current body class is set to the light-theme, update the user's preference to the dark-theme in the browsers
     * local storage.
     */
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }
    /**
     * If the current body class is set to the dark-theme, update the user's preference to the light-theme in the browsers
     * local storage.
     */
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");

    }

    /**
     * Apply the updated selection to the HTML page elements
     */
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}

/*
//Clear browser's storage and set default theme to light theme.
function clearLocalStorage() {
    localStorage.clear();
    document.body.classList.value = "light-theme";
    document.getElementById("icon-text").innerHTML = "Light Mode";
    document.getElementById("icon-mode").classList.value = "fa fa-toggle-off pull-right";
}*/
