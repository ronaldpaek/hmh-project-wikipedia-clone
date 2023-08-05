document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const mainNav = document.getElementById("main-nav");
  const headerStart = document.querySelector(".header-start");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");
  const userLinksButton = document.getElementById("user-links-button");
  const userNav = document.getElementById("user-nav");
  const dropDown = document.getElementById("drop-down");
  const toolsDropDown = document.getElementById("tools-drop-down");

  // Function to close all dropdowns
  const closeAllDropdowns = () => {
    mainNav.style.display = "none";
    userNav.style.display = "none";
    toolsDropDown.style.display = "none";
  };

  menuButton.addEventListener("click", () => {
    if (mainNav.style.display === "block") {
      mainNav.style.display = "none";
      mainNav.setAttribute("tabindex", "-1");
    } else {
      closeAllDropdowns();
      mainNav.style.display = "block";
      mainNav.setAttribute("tabindex", "0");
      mainNav.focus();
    }
  });

  userLinksButton.addEventListener("click", () => {
    if (userNav.style.display === "block") {
      userNav.style.display = "none";
      userNav.setAttribute("tabindex", "-1");
    } else {
      closeAllDropdowns();
      userNav.style.display = "block";
      userNav.setAttribute("tabindex", "0");
      userNav.focus();
    }
  });

  dropDown.addEventListener("click", () => {
    if (toolsDropDown.style.display === "block") {
      toolsDropDown.style.display = "none";
      toolsDropDown.setAttribute("tabindex", "-1");
    } else {
      closeAllDropdowns();
      toolsDropDown.style.display = "block";
      toolsDropDown.setAttribute("tabindex", "0");
      toolsDropDown.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      searchForm.style.display === "inline-flex" &&
      !searchForm.contains(event.target)
    ) {
      headerStart.style.display = "flex";
      searchButton.style.display = "inline";
      searchForm.style.display = "none";
    }

    if (
      mainNav.style.display === "block" &&
      !mainNav.contains(event.target) &&
      !menuButton.contains(event.target) &&
      !dropDown.contains(event.target)
    ) {
      mainNav.style.display = "none";
    }

    if (
      userNav.style.display === "block" &&
      !userNav.contains(event.target) &&
      !userLinksButton.contains(event.target) &&
      !toolsDropDown.contains(event.target)
    ) {
      userNav.style.display = "none";
    }

    if (
      toolsDropDown.style.display === "block" &&
      !toolsDropDown.contains(event.target) &&
      !dropDown.contains(event.target)
    ) {
      toolsDropDown.style.display = "none";
    }
  });

  searchButton.addEventListener("click", (event) => {
    headerStart.style.display = "none";
    searchButton.style.display = "none";
    searchForm.style.display = "inline-flex";
    searchInput.focus();
    event.stopPropagation();
  });

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
