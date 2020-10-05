// Creating an object based off of the users input
function addUser() 
{
	var user = {first_name: "john, last_name: "wayne, age: 30};
	
	// Using the stringify() method to convert my JS object into a JSON object
	var myJSON = JSON.stringify(addUser);
};

// Display that data from the object
function displayUser() 
{
	document.getElementById("demo").innerHTML = myJSON;
};
