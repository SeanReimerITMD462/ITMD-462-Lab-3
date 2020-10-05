// Creating an object based off of the users input
function addUser() 
{
	var user = {first_name, last_name, age};
	
	// Using the stringify() method to convert my JS object into a JSON object
	var myJSON = JSON.stringify(user);
};

// Display that data from the object
function displayUser() 
{
	var user, x;
		for (x in user) {
			document.getElementById("demo").innerHTML += myJSON[x] + "<br>";
		}
};
