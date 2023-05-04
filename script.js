const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (let i = 0; i < fruits.length; i++) {
		let fruit = fruits[i].toLowerCase();
		if (fruit.includes(str.toLowerCase())) {
			results.push(fruit);
		}
	}
	return results;
}

function searchHandler(e) {
	let inputVal = e.target.value;
	let results = search(inputVal);
	showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join("");
	suggestions.style.display = results.length > 0 ? "block" : "none";
}

function useSuggestion(e) {
	if (e.target.tagName === "LI") {
		let suggestion = e.target.textContent;
		input.value = suggestion;
		suggestions.style.display = "none";
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);