var userSubmit = document.querySelector("#user-submit");

function addToDo(event){
	event.preventDefault();		//prevents refreshing

	var userInput = document.querySelector("#user-input");	

	var toDoList = document.querySelector("#to-do-list");	


	if(userInput.value === ""){
		return false;
	}

	toDoList.innerHTML += "<li>" + userInput.value + "</li>"; //creates list item element on the html file

	userInput.value = ""; //clears out the input box
}

userSubmit.addEventListener("click", addToDo, false);