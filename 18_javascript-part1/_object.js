// ++ ARRAY ++
// Normal writing
var nameOfArray = ['Harry Potter pergi ke ', 'Hermione Granger pergi ke ', 'Ron Weasley pergi ke '];

nameOfArray[0] += 'Gryffindor.';
nameOfArray[1] += 'Gryffindor.';
nameOfArray[2] += 'Gryffindor.';

nameOfArray;

// Make it simple
var nameOfChar = ['Draco Malfoy pergi ke ', 'Vincent Crabbe pergi ke ', 'Gregory Goyle pergi ke '];

var lengthCharArray = nameOfChar.length;

for (i=0; i<lengthCharArray; i++) {
	nameOfChar[i] += 'Slytherin';
};

nameOfChar;

// ++ OBJECT ++
// Object = {propertyName:propertyValue, propertyName:propertyValue};
var myPlaylist = {
	'title':'Shape Up',
	'artist':'State Champs'
};

myPlaylist;

var favThings = {
	'colors' : ['Black', 'White', 'Pink', 'Blue'],
	'numbers' : [21, 5, 95],
	'food' : ['Burger', 'Steak', 'Duck', 'Anything with meat']
};

favThings;

// object.propertyName
var brownie = {
	'butter': '1/2 cangkir',
	'sugar': '1 cangkir',
	'unsweetened cocoa powder': '1 cangkir',
	'eggs': '2 butir yang besar',
	'flour': '1/2 cangkir'
};

brownie.eggs;

// objectName['Property Name'];
brownie['unsweetened cocoa powder';

// Objek Bersarang
var myBook = {
  'title': 'To Kill a Mockingbird',
  'author': 'Harper Lee',
  'genre': 'coming-of-age story',
  'year of publication': 2015,
  'has been read': true,
  'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
	'quotes' : {
		'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',

    'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',

    'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
  },
  'borrowed by': null
};

myBook.quotes.p116;
myBook['quotes']['p116'];
myBook.quotes['p116'];
myBook['quotes'].p116;

// objectName.propertyName = newValue; objectName['propertyName'] = newValue;
myBook['borrowed by'] = 'Kathy';

var solarSystem = {
	'Mercury': 'planet',
	'Venus': 'planet',
	'Earth': 'planet',
	'Mars': 'planet',
	'Jupiter': 'planet',
	'Saturn': 'planet',
	'Uranus': 'planet',
	'Neptune': 'planet',
	'Pluto': 'planet',
	'Ceres': 'planet kurcaci',
	'Makemake': 'planet kurcaci',
	'Haumea': 'planet kurcaci',
	'Eris': 'planet kurcaci'
};

solarSystem.Pluto = 'planet kurcaci';
solarSystem.Pluto //planet kurcaci

// Menambah propertyName
var cats = {'Selkirk Rex': 'rambut keriting', 'Scottish Fold': 'telinga terlipat', 'Exotic Shorthair': 'hidung pesek'};

cats['Kucingnya Raditya Dika'] = 'gapunya bulu euhh~';

// Memeriksa property object
var apartment = {'type of the building': 'bata', 'floor': 'lantai 4', 'number of rooms': '3 kamar', 'size': '62 meter persegi', 'view': 'taman', 'pets allowed': ['anjing', 'kucing'], 'shortest rental period': 'minimal satu tahun'};

'pets allowed' in apartment; //true

// ++ METODE OBJECT ++
var leonardoDiCaprio = {
	'born': 1974,
	'birth name': 'Leonardo Wilhelm DiCaprio',
	'most popular movies': ['Titanic', 'The Departed', 'Shutter Island', 'Inception', 'Django Unchained'],
	'piala oscar': function() {
		leonardoDiCaprio.thropies = prompt('Berapa jumlah piala oscar Leonardo Di Caprio?'); // Menyimpan data yang diketik
		console.log('Jumlah piala oscar Leo adalah ' + leonardoDiCaprio.thropies + ' buah'); // Menampilkan data dalam console
	}
};

leonardoDiCaprio['piala oscar']();

// Menghitung dalam metode objek
var budget = {
	'income': 8000,
	'expenses': 5952,
	'balance': function() {
		console.log('Tabunganmu saat ini ' + (budget.income - budget.expenses))
	}
};

budget.balance(); // memanggil fungsi dalam Metode 'balance'

// Menggunkan kata kunci 'this'
var sampleOne = {
	'name': 1,
	'print': function() {
		console.log(this.name);
	}
};

var sampleTwo = {
	'name': 2,
	'print': function() {
		console.log(this.name);
	}
};

console.log(sampleTwo.print());

// Bentuk lain kata kunci 'this'
var printThis = function() {
	console.log(this.name)
};

var testOne = {
	'name': 1,
	'print': printThis
}

console.log(testOne.print());

// Parameter dalam OBJECT METHODE
var chars = {
	'character1': {
		'first name': 'James',
		'last name': 'Bond'
	},
	'character2': {
		'first name': 'Luke',
		'last name': 'Skywalker'
	},
	'character3': {
		'first name': 'Jason',
		'last name': 'Bourne'
	},
	'callChar': function(){
		var charId = prompt('Put ID');

		if(typeof this[charId] === 'undefined') {
			console.log('Invalid ID');
		} else {
			var result = 'Hello, ' + this[charId]['first name'] + ' ' + this[charId]['last name'];
			console.log(result);
		}
	}
};

chars.callChar();

// OBJECT ITERATION
var bicycle = {
	'type': 'city bike',
	'color': 'hijau mint',
	'frame material': 'baja',
	'bikePrint': function(){
		var bikeData = [];
		for (var bike in this){ // "var bike" adalah variable yang dinamis, jadi tidak usah ditentukan nilainya
			if (typeof this[bike] !== 'function') {
				bikeData.push(this[bike]);
			}
		}
		console.log(bikeData);
	}
};

bicycle.bikePrint();

// REFERENCE TYPE pada OBJECT
var exFunc = function(){
	var exChar = []
	for (var char in this){
		if(typeof this[char] != 'function') {
			exChar.push(this[char]);
		}
	}
	return (exChar)
}

var john = {
	'hair color': 'rambut cokelat',
	'eye color': 'mata cokelat',
	'face shape': 'wajah oval',
	'build': 'kurus',
	'height': 'tinggi',
	'exType': exFunc
};

var tom = {
	'hair color': 'rambut cokelat',
	'eye color': 'mata cokelat',
	'face shape': 'wajah oval',
	'build': 'kurus',
	'height': 'tinggi',
	'exType': exFunc
};

if (john.exType() === tom.exType()) {
	console.log(true)
} else {
	console.log(false)
}; // hasilnya false
