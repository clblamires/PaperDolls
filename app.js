let characterIcons = document.getElementsByClassName("characters")[0];
let icons = characterIcons.getElementsByTagName("img");
for ( let i = 0; i < icons.length; i++ ){
    icons[i].addEventListener("click", ()=> {
            console.log(icons[i].getAttribute("id"))
    });
}