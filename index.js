// alert("hello");
// const panels = document.querySelectorAll(".panel");

// panels.forEach(panel => {
//     panel.addEventListener("click", () => {removeActiveClasses();  panel.classList.add("active");})
// })
// function removeActiveClasses()
// {
//     panels.forEach(panel => {
//         panel.classList.remove("active");
//     })
// }
// $(document).click(alert("hello"));
// $(".panel").click(function(){
//     $(".panel").forEach(panel => {
//         panel.classList.remove("active");
//         addClassActive();
        
//     });
// })
// function addClassActive(){
//     $("panel.").forEach(panel => {
//         panel.classList.add("active");
//     })
// }

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}