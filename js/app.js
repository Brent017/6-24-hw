// console.log('working')
// A light switch that can be either on or off.
// Array with Boolean:
// const lightSwitch = [0, 1]
// if (lightSwitch === true) {
// 	return "On";
// } else {
// 	return "Off";
// };
// // A user's email address.
// // Object
// const user {
// 	email: "user@gmail.com"
// };
// // A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// // Array
// const spaceship = ["hull", "laser blasters", "tractor beam", "warp drive"];
// // A list of student names from our class.
// // Array:
// const studentNames = ["Brent", "Josh", "John"];
// // A list of student names from our class, each with a location.
// // Object:
// const studentInfo {
// 	Brent {
// 		location: Westminster
// 	},
// 	Josh {
// 		location: Denver
// 	},
// 	John {
// 		location: Denver
// 	}
// };
// // A list of student names from our class, each with a location and each with a list of favorite tv shows.
// // Object:
// const studentData {
// 	Brent {
// 		location: Westminster,
// 		favoriteShows: ["TV show", "TV show"]
// 	},
// 	Josh {
// 		location: Denver,
// 		favoriteShows: ["TV show", "TV show"]
// 	},
// 	John {
// 		location: Denver,
// 		favoriteShows: ["TV show", "TV show"]
// 	}
// };

// 2. Take it Easy:
// const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// console.log(rainbow[4]);
// const brent = {
// 	favoriteFood: "burger",
// 	hobby: "coin collecting",
// 	location: "Westminster",
// 	dataType: "Array"
// };
// console.log(brent.hobby);

// 3. Crazy object!:
// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favourtieHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// };

// console.log(crazyObject.taco[1].salsa[5]);
// console.log(crazyObject.larry.quotes[0]);
// console.log(crazyObject.larry.characters[2].favourtieHobby);
// console.log(crazyObject.larry.nicknames[1]);
// console.log(crazyObject.larry.characters[1]);

// 4. Object-ception:
// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// };

// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);

// 5-7. Bond Films:
const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

// const bondTitles = [];
// for (let key in bondFilms) {
// 		bondTitles.push(bondFilms[key].title);
// };
// console.log(bondTitles);

// const oddBonds = [];
// for (let key in bondFilms) {
// 	if (bondFilms[key].year % 2 !== 0) {
// 		oddBonds.push(bondFilms[key]);
// 	}
// };
// console.log(oddBonds);

// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result.

const strIsNum = (str) => {
	const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	for (let i = 0; i < numbers.length; i++) {
		if (str === numbers[i]){
			return true;
		}
	} 
	return false;
}

const bondParser = (string) => {
	let grossNumber = "";
	for (let i = 0; i < string.length; i++) {
		if(strIsNum(string[i])) {
			grossNumber += string[i];
		}
		}
	grossNumber = parseInt(grossNumber);
	return grossNumber;
};

let sum = 0;
for (let i = 0; i < bondFilms.length; i++) {
	sum += bondParser(bondFilms[i].gross);
}

console.log(sum);


