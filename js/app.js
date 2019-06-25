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
const crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
};

console.log(crazyObject.taco[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters[1]);

// bond question loop over the string and remove anything that is not a number, numbers go into an array, else goes into a junk array

