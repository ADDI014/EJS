let btns = document.querySelectorAll("button");

for(let btn of btns){ // Using let instead of var
    btn.addEventListener("click", () => {
        console.log("button clicked");
    });
}
