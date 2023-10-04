
const sounds = [
	'sound1',
	'sound2',
	'sound3', 
	'sound4',
	'sound4', 
	'sound5', 
	'sound6', 
	'sound7', 
	'sound8', 
	'sound9', 
	'sound10', 
	'sound11', 
	'sound12', 
	'sound13', 
	'sound14', 
	'sound15', 
	'sound16', 
	'sound17', 
	'sound18', 
	'sound19', 
	'sound20', 
	'sound21'
	];


sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;
	btn.addEventListener("click", () => {
		stopSongs();
		document.getElementById(sound).play();
	});

	document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {

	sounds.forEach(sound => {
		const song = document.getElementById(sound);
		song.pause();
		song.currentTime = 0;
	})
}

