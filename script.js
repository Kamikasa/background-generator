var database = [
	{
		username: "andrei1",
		password: "secret1"
	},
		{
		username: "andrei2",
		password: "secret2"
	},
		{
		username: "andrei3",
		password: "secret3"
	}
];

var newsFeed = [
	{
		username: "bobby",
		timeline: "So tired from all that learning"
	},
	{
		username: "sally",
		timeline: "Javascript is sooo cool!"
	},
		{
		username: "Mitch",
		timeline: "Javascript is very cool!"
	}

];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
		for(var i=0; i < database.length; i++) {
			if(database[i].username === username && database[i].password === password) {
			return true;
		}
	}
	return false;
}
function signIn(username, password) {
	
	//for(var i=0; i < database.length; i++) {
	//	if(database[i].username === username && database[i].password === password) {
	//		console.log(newsFeed)
	//	} else {
	//		alert("Sorry, wrong username or password");		
	//	}
	//}
	//	if (user === database[0].username && pass === database[0].password) {
	//		console.log(newsFeed);
	//	} else {
	//		alert("Sorry, wrong username or password");
	//	}

		if (isUserValid(username, password)) {
			console.log(newsFeed);
		} else {
			alert("Sorry, wrong username or password");
		}
}
signIn(userNamePrompt, passwordPrompt);
