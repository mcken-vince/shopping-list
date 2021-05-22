var button = document.getElementById("enter"); //var button = enter button
var input = document.getElementById("userinput"); //var input = input in text box
var ul = document.querySelector("ul"); //var ul = unordered shopping list
var list = document.querySelectorAll("li"); //var list = array of list elements

// returns length of input in text box
function inputLength() {
	return input.value.length;
}

// creates new list element with a delete button
function createListElement() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.onclick = toggleDone;
		input.value = "";

		var delBtn = document.createElement("button");
		// delBtn.addEventListener("onClick", deleteItem);
		delBtn.className = "delete";
		delBtn.innerHTML = "Delete";
		delBtn.onclick = deleteItem;

		li.append(" ", delBtn);
		emptyList();
}

// calls createListElement function in event of enter button click
function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

//calls createListElement function in event of keypress "enter"
function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// toggles item className between done/none
function toggleDone() {
	if (this.className === "done") {
		this.className = "";
	} else {
		this.className = "done";
	}
}

// deletes parent item (when child delete button is clicked) & calls emptyList function
function deleteItem() {
	this.parentNode.remove();
	emptyList();
}

function emptyList() {
	var list = document.querySelectorAll("li"); //var list = array of list elements
	var empty = document.getElementById("empty");
	console.log(empty);
	console.log(list.length);
	console.log(empty.innerHTML);
	if (list.length === 0) {
		empty.style.display = "block";
	} else {
		empty.style.display = "none";
	}
}

// listens for "click" on enter button
button.addEventListener("click", addListAfterClick);

// listens for "enter" keypress
input.addEventListener("keypress", addListAfterKeypress);

// listens for click on list elements, and calls toggleDone function when clicked
for (var i=0; i < list.length; i++) {
	list[i].addEventListener("click", toggleDone);
}