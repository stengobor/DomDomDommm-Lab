document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");
    const btnText = document.createTextNode('Add Square');
    button.appendChild(btnText);
    document.body.appendChild(button);
    let counter = 1;
    
    button.addEventListener("click", run);

    const container = document.createElement("container");
    document.body.appendChild(container);

    function run() {
        let box = document.createElement("div");
        box.className = "box";
        box.id = counter++;
        container.appendChild(box);
        box.addEventListener("mouseover", function() {
            box.textContent = box.id
        });
        box.addEventListener("mouseout", function() {
            box.textContent = "";
        });
        box.addEventListener("click", function() {
            let colors = ["gold", "magenta", "limegreen"];
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.style.backgroundColor = randomColor
        })
        box.addEventListener("dblclick", function() {
            if ((box.id % 2 === 0) && (box.nextElementSibling === null)) {
                alert("The box is gone!")
            } else if (box.id % 2 === 0) {
                box.nextElementSibling.remove();
            } else if (box.previousElementSibling === null) {
                alert("The box is gone!")
            } else {
                box.previousElementSibling.remove();
            }
        })
    }

});

