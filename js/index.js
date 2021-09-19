const tabs = document.querySelectorAll('.tab-title');
const cards = document.querySelectorAll('.card');
let counter = 0;
cards[counter].style.display = 'block';
tabs[0].classList.add('set-tab');


tabs.forEach(tab => tab.addEventListener('click', (e) => {
	setNav(e);
	setCards()
}))

function setNav(e) {
	for(let i=0; i<tabs.length; i++) {
		tabs[i].classList.remove('set-tab');
	}
	e.target.classList.add('set-tab');
	switch(e.target.id) {
		case 'tab-1':
		counter = 0;
		break;

		case 'tab-2':
		counter = 1;
		break;

		case 'tab-3':
		counter = 2;
		break;
	}
	console.log(counter);
}

function setCards() {
	for(let i=0; i<cards.length; i++) {
		cards[i].style.display = 'none';
	}	
	cards[counter].style.display = 'block';
}