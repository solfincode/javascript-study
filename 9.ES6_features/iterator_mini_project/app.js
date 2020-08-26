const data = [
	{
		name: "john",
		age: 23,
		gender: "male",
		lookingfor: "female",
		location: "SF",
	},
	{
		name: "paul",
		age: 43,
		gender: "female",
		lookingfor: "male",
		location: "Chicago",
	},
	{
		name: "mike",
		age: 43,
		gender: "female",
		lookingfor: "male",
		location: "NYC",
	},
];

const profiles = profileIterator(data);
nextProfile();
//next event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
	const currentProfile = profiles.next().value;
	if (currentProfile !== undefined) {
		document.getElementById("profileDisplay").innerHTML = `
    <ul>
    <li>Name:${currentProfile.name}</li>
    <li>age:${currentProfile.age}</li>
    <li>location:${currentProfile.location}</li>
    <li>gender:${currentProfile.gender}</li>
    <li>lookingfor:${currentProfile.lookingfor}</li>
    </ul>
    `;
	} else {
		window.location.reload();
	}
}
function profileIterator(profiles) {
	let nextIndex = 0;
	return {
		next: function () {
			return nextIndex < profiles.length
				? { value: profiles[nextIndex++], done: false }
				: { done: true };
		},
	};
}
