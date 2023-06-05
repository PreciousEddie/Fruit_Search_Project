const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive 🫒', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {//takes a string parameter
	let results = [];
	for (let i = 0; i < fruits.length; i++) {// loops through the fruits array
		let fruit = fruits[i].toLowerCase();//checks if fruit name converted to lowercase includes the search string also converted to lowercase
		if (fruit.includes(str.toLowerCase())) {
			results.push(fruit);//if a match is found, the fruit name is added to the results array
		}
	}
	return results;
}

function searchHandler(e) {//an event handler for the keyup event on the input field
	let inputVal = e.target.value;//retrieves the current value of the input field
	let results = search(inputVal);//calls the search function with that value
	showSuggestions(results, inputVal);//calls the function to display the suggestions based on the search results
}

function showSuggestions(results, inputVal) {//takes two parameters of results and inputVal
	suggestions.innerHTML = results.map(result => `<li>${result}</li>`).join("");//generates the HTML for each result using the map method and wraps its in li tags and joins them together into a single string, then assigns the HTML string to the innerHTML property of the suggestions element
	suggestions.style.display = results.length > 0 ? "block" : "none";//sets the display style property of the suggestions element to either "block" if there are results or "none" if there are no results
}

function useSuggestion(e) {//an event handler for the click event on the suggestions list
	if (e.target.tagName === "LI") {//checks if the clicked element's tag name is LI
		let suggestion = e.target.textContent;
		input.value = suggestion;
		suggestions.style.display = "none";
		//if it is, it retrieves the text content of the clicked element and sets the value of the input field to that suggestion and finally hides the suggestions by setting the display to "none"
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);