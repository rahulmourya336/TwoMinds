

let addTextBox = _ => {
    let addTextboxBtn = document.querySelector("add__textbox");
    let length = document.querySelectorAll(".input-group").length;

    /**
     * Create & Add element
     */
    var div = document.createElement('div');

    div.className = 'input-group';
    div.id = length + 1;

    if (div.id > 5) {
        document.getElementById("error__message").innerText = "Only Five options are supported in this version.";
        return;
    }


    div.innerHTML = `<span class="input-group-addon addon-lg">Choice ${length + 1}</span>
     <input type="text" class="form-input input-lg" placeholder="...." name="choice${length + 1}" required="" maxlength="20" id="_${length + 1}">
 </div>`;

    document.getElementById('extras').appendChild(div);
    console.log(`Added ${length + 1}`);

}

let validateData = _ => {
    let choice1 = document.getElementById('_1').value;
    let choice2 = document.getElementById('_2').value;
    
    let choices = [choice1, choice2];
    y = document.getElementById("extras");
    length = y.querySelectorAll(".input-group").length;
    for (let z = 0; z < length; z++) {
        choices.push(document.getElementById(`_${z + 3}`).value)
    }
    console.log("Your Choices", choices);
    localStorage.setItem('choices', choices);
    window.location.href = '3.html';
}

let validateLocalStorage = _ => {
    if (!localStorage.getItem('choices')) {
        window.location.href = '2.html';
    }
}

let shuffleChoice = _ => {
    let temp = localStorage.getItem('choices');
    temp = [...temp].filter(words => words !== ',');
    let randomValue = Math.floor(Math.random() * temp.length) + 1;
    console.log(randomValue);
    document.getElementById('choice').innerHTML = temp[randomValue - 1];
}