function navigateTo(target){
    const contactBox = document.getElementById("Contact");
    const aboutBox = document.getElementById("About");
    const projectsBox = document.getElementById("Projects");
    const title = document.getElementById("title").firstElementChild;

    if (target === "Contact"){
        title.innerHTML = "CONTACT";
        contactBox.style.display = "block";
        aboutBox.style.display = "none";
        projectsBox.style.display = "none";
    }
    else if (target === "About"){
        title.innerHTML = "TOMONA OISHI";
        contactBox.style.display = "none";
        aboutBox.style.display = "flex";
        projectsBox.style.display = "none";
    }
    else if (target === "Projects"){
        title.innerHTML = "PROJECTS";
        contactBox.style.display = "none";
        aboutBox.style.display = "none";
        projectsBox.style.display = "block";
    }
}