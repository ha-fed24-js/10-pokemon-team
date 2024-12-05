const columns = document.querySelectorAll('.column')
const chosenHeading = columns[1].querySelector('h2')
const chosenTotalPower = columns[1].querySelector('.power')

const pokemon = [
    { id: 1, name: 'Bulbasaur', cp: 439 },
    { id: 37, name: 'Vulpix', cp: 194 },
    { id: 134, name: 'Vaporeon', cp: 2469 },
    { id: 130, name: 'Gyarados', cp: 2406 },
    { id: 25, name: 'Pikachu', cp: 455 },
    { id: 27, name: 'Sandshrew', cp: 710 },
    { id: 52, name: 'Meowth', cp: 121 }
]
let totalCombatPower = 0
const pokeColors = ['green', 'brown', 'yellow', 'pink']
let selectedColor = 0

initializePokemon()

function initializePokemon() {
	// lägga till DOM-element för varje Pokémon i listan

	pokemon.forEach(p => {
		const box = createPokemonBox(p.name, p.cp)
		columns[0].append(box)
	})

}
function createPokemonBox(name, cp) {
	const color = pokeColors[selectedColor]
	selectedColor++
	if( selectedColor >= pokeColors.length ) {
		selectedColor = 0
		// Detta kan göras smidigare med modulo-operatorn (%)
	}

	const section = document.createElement('section')
	section.classList.add('pokemon')
	section.innerHTML = `<div class="box ${color}"></div>`

	const div = document.createElement('div')
	div.classList.add('align-bottom')

	const h3 = document.createElement('h3')
	const p = document.createElement('p')
	h3.innerText = name
	p.innerText = cp
	div.append(h3, p)

	section.append(div)

	section.addEventListener('click', () => {
		console.log('Du klickade på ' + name)
		// columns[1].append( section )
		chosenHeading.insertAdjacentElement('afterend', section)

		// Uppdatera total combat power
		totalCombatPower += cp
		chosenTotalPower.innerText = `Total CP: ${totalCombatPower}.`
	})
	return section
}