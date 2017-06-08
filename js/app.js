var userSubmit = document.querySelector("#user-submit");

function addToDo(event){
	event.preventDefault();		//prevents refreshing

	var userInput = document.querySelector("#user-input");	

	var toDoList = document.querySelector("#to-do-list");	


	if(userInput.value === ""){
		return false;
	}

	//toDoList.innerHTML += "<li>" + userInput.value + "</li>"; //creates list item element on the html file

	var li = document.createElement("li");
	var icon = document.createElement("i");
	li.innerHTML = userInput.value + "  <i class=\"fa fa-window-close\" aria-hidden=\"true\"></i>"; 
	toDoList.prepend(li);

	userInput.value = ""; //clears out the input box
}

function clearToDo(event){
	event.preventDefault();
	li.userInput.removeChild(li);
}

userSubmit.addEventListener("click", addToDo, false);