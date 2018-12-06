let checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        x = document.getElementById("add__textbox");
        x.hidden = false;
    } else {
        x = document.getElementById("add__textbox");
        x.hidden = true;
    }
});

let addTextBox = _ => {
    let addTextboxBtn = document.querySelector("add__textbox");
    let length = document.querySelectorAll(".input-group").length;

    x = ` <div class="input-group" id="${length + 1}">
            <span class="input-group-addon addon-lg">Choice ${length + 1}</span>
             <input type="text" class="form-input input-lg" placeholder="...." name="choice${length + 1}" required="">
        </div>
         </div>`;

    console.log(`Added ${length + 1}`);

}
