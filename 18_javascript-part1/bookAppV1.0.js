var myBook1 = {
  'title': 'To Kill a Mockingbird',
  'author': 'Harper Lee',
  'genre': 'coming-of-age story',
  'year of publication': 2015,
  'has been read': true,
  'main characters': ['Jean Louise Finch', 'Jeremy Finch', 'Atticus Finch'],
  'quotes': {
    'p116': '"Atticus, you must be wrong..." "How\'s that?" "Well, most folks seem to think they\'re right and you\'re wrong..." "They\'re certainly entitled to think that, and they\'re entitled to full respect for their opinions," said Atticus, "but before I can live with other folks I\'ve got to live with myself. The one thing that doesn\'t abide by majority rule is a person\'s conscience."',
    'p124': 'I wanted you to see something about her—I wanted you to see what real courage is, instead of getting the idea that courage is a man with a gun in his hand. It\'s when you know you\'re licked before you begin but you begin anyway and you see it through no matter what. You rarely win, but sometimes you do.',
    'p309': '"An\' they chased him \'n\' never could catch him \'cause they didn\'t know what he looked like, an\' Atticus, when they finally saw him, why he hadn\'t done any of those things... Atticus, he was real nice..." His hands were under my chin, pulling up the cover, tucking it around me. "Most people are, Scout, when you finally see them."'
  },
  'borrowed by': null,
  'rating' : 5,
  'page marker': function () {
    var pageInitial = myBook1.page;
    myBook1.page = 5; // use prompt
    if (typeof pageInitial === 'undefined') {
      console.log('You are on page ' + myBook1.page + ' in the book titled ' + myBook1.title + '.'); // use alert
    } else {
      console.log('You are on page ' + myBook1.page + ' in the book titled ' + myBook1.title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (myBook1.page - pageInitial) + ' pages this time.'); // use alert
    }
  }
};

var myBook2 = {
  'title': 'The Picture of Dorian Gray',
  'author': 'Oscar Wilde',
  'genre': 'philosophical fiction',
  'year of publication': 2016,
  'has been read': true,
  'main characters': ['Dorian Gray', 'Lord Henry Wotton', 'Basil Hallward'],
  'quotes': {
    'p12': 'You are an extraordinary fellow. You never say a moral thing, and you never do a wrong thing. Your cynicism is simply a pose.',
    'p46': 'Nowadays most people die of a sort of creeping common sense, and discover when it is too late that the only things one never regrets are one\'s mistakes.',
    'p127': '"That book you sent me so fascinated me that I forgot how the time was going." "Yes: I thought you would like it," replied his host, rising from his chair. "I didn\'t say I liked it, Harry. I said it fascinated me. There is a great difference." "Ah, you have discovered that?"'
  },
  'borrowed by': null,
  'rating': 5,
  'page marker': function () {
    var pageInitial = myBook2.page;
    myBook2.page = 3;
    if (typeof pageInitial === 'undefined') {
      console.log('You are on page ' + myBook2.page + ' in the book titled ' + myBook2.title + '.');
    } else {
      console.log('You are on page ' + myBook2.page + ' in the book titled ' + myBook2.title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (myBook2.page - pageInitial) + ' pages this time.');
    }
  }
};

var myBook3 = {
  'title': 'The Hitchhiker\'s Guide to the Galaxy',
  'author': 'Douglas Adams',
  'genre': 'comedy science fiction',
  'year of publication': 2001,
  'has been read': false,
  'main characters': [],
  'quotes': {},
  'borrowed by': null,
  'rating': undefined,
  'page marker': function () {
    var pageInitial = myBook3.page;
    myBook3.page = null;
    if (typeof pageInitial === 'undefined') {
      console.log('You are on page ' + myBook3.page + ' in the book titled ' + myBook3.title + '.');
    } else {
      console.log('You are on page ' + myBook3.page + ' in the book titled ' + myBook3.title + '. Last time you were on page ' + pageInitial + ', so you have read ' + (myBook3.page - pageInitial) + ' pages this time.');
    }
  }
};

myBook2['page marker']();
