let currentProject = 0; //current project being displayed
const projects = document.querySelectorAll(".project"); //selecting elements with class ".project"

function showProject(index) {
    //loops all projects and displays the given index
    projects.forEach((project, i) => {
        project.style.display = i === index ? "block" : "none";
    });
}

function nextProject() {
    //moves to next project

    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
}
function prevProject(){
    //moves to previous project
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
}
showProject(currentProject);