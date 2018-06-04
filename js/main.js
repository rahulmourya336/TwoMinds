var GLOBAL_CHOICE_COUNT = document.querySelectorAll("label").length;

document.getElementById("add_choices")
	.addEventListener("click", function () {

		var interaction_container = document.getElementById("interaction_container");


		var LOCAL_CHOICE_COUNT = GLOBAL_CHOICE_COUNT;
		LOCAL_CHOICE_COUNT += 1;

		var label = document.createElement("label");
		label.setAttribute('for', "choice_" + LOCAL_CHOICE_COUNT);
		label.innerHTML = "Choice " + LOCAL_CHOICE_COUNT;
		label.className = "choice_label";

		var input = document.createElement("input");
		input.type = "text";
		input.setAttribute('placeholder', "Enter choice " + LOCAL_CHOICE_COUNT);
		input.className = "form";


		interaction_container.appendChild(label);
		interaction_container.appendChild(input);

	});

document.getElementById("add_choices")
	.addEventListener("click", function () {
	if GLOBAL_CHOICE_COUNT > 2{
		
	}
}
