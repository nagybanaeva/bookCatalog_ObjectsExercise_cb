let bookCatalog = {
	'myBook1' :{
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
		'borrowed by':'undifined',
		'rating': 5,
	},
	'myBook2':{
		'title': 'The Red and the Black',
  		'author': 'Stendhal',
  		'genre': 'historical psychological novel',
  		'year of publication': 1830,
		'has been read': true,
  		'main characters': ['Julien Sorel', 'Madame de Renal', 'Mathilde de la Mole'],
  		'quotes': {
    		'p1': '"The little town of Verrières might be one of the prettiest in all Franche-Comté." "This operation, visibly harsh and violent, is one of the things that most astonishes a first-time traveler, poking his way into the mountains separating France and Switzerland. "',
    		'p6': 'Monsieur Appert understood that he was dealing with a high-minded man: he followed the venerable priest, went to the prison, the old people\’s home, the poorhouse, asked a great many questions and, in spite of some extraordinary responses, did not allow himself the slightest indication of criticism.',
    		'p10': '"Well, lazybones! You\’re always reading your damned books—and you’re supposed to be in charge of the saw? Read them tonight, when you\’re wasting time with the parish priest— fine, fine!" "He was a small young man, eighteen or nineteen years old, not appearing very strong, with irregular but delicate features and an aquiline nose."'
  		},
		'borrowed by':'undifined',
		'rating': 5,
	},
	'myBook3':{
		'title': 'The Hearthless Man\'s Sons',
  		'author': 'Mór Jókai',
  		'genre': 'historical novel',
  		'year of publication': 1869,
		'has been read': true,
  		'main characters': ['Julien Sorel', 'Madame de Renal', 'Mathilde de la Mole'],
  		'quotes': {
    		'p5': 'The baroness did her husband\'s bidding, seating herself at the little table and writing down what had just been told her. ',
    		'p20': 'The old priest, however, lingered behind and, while all the rest turned their faces toward the castle, took his daughter by the hand and went another way. In vain had a cover been laid for him in the great hall of the castle.',
    		'p35': 'But Ödön arose without a word and left the box. Leonin followed him.'
  		},
		'borrowed by':'undifined',
		'rating': 5,
	},
	'page marker': function (book) {
		let pageInitial = this[book].page;
  		this[book].page = prompt('Melyik oldalon tartasz a ' + this[book].title + ' című könyvedben?');
		if(typeof pageInitial === 'undefined') {
    		alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '.');
  		} 
		else if (pageInitial > this[book].page) { 
			alert('Szerintem elírtad a aktuális oldalszámot' + ' az alábbi könyvedben: ' + this[book].title + ', mert a ' + this[book].page + ' kevesebb, mint az előzőleg elolvasott oldalszám, azaz a(z) ' + pageInitial + '.');
		}
		else {
    		alert('Jelenleg az alábbi oldalon tartasz: ' + this[book].page + ' az alábbi könyvedben: ' + this[book].title + '. Legutóbb az alábbi oldalon tartottál: ' + pageInitial + ', így ez alkalommal ' + (this[book].page - pageInitial) + ' oldalt olvastál.');
  		}
	},
	'unread': function () {
		let booksToRead = [];
  		for (let book in this) {
			if (this[book]['has been read'] === false) {
      		booksToRead.push(this[book].title);
    		}
		}
		
		if (booksToRead.length === 0) {
			console.log('Elolvastad az összes könyvedet.');
  		} 
		else {
    		console.log('Nem olvastad még el az alábbi könyveket: ' + booksToRead);
  		}
	}
};

bookCatalog['unread']();

/*bookCatalog['page marker']('myBook3');
bookCatalog['page marker']('myBook3');
*/

