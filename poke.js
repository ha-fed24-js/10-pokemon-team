const columns = document.querySelectorAll('.column')

const pokemon = [
    { id: 1, name: 'Bulbasaur', cp: 439 },
    { id: 37, name: 'Vulpix', cp: 194 },
    { id: 134, name: 'Vaporeon', cp: 2469 },
    { id: 130, name: 'Gyarados', cp: 2406 },
    { id: 25, name: 'Pikachu', cp: 455 },
    { id: 27, name: 'Sandshrew', cp: 710 },
    { id: 52, name: 'Meowth', cp: 121 }
]

initializePokemon()

function initializePokemon() {
	// lägga till DOM-element för varje Pokémon i listan

	pokemon.forEach(p => {
		const box = createPokemonBox(p.name, p.cp)
		columns[0].append(box)
	})

}
function createPokemonBox(name, cp) {
	const section = document.createElement('section')
	section.classList.add('pokemon')
	section.innerHTML = `<div class="box"></div>`

	const div = document.createElement('div')
	div.classList.add('align-bottom')

	const h3 = document.createElement('h3')
	const p = document.createElement('p')
	h3.innerText = name
	p.innerText = cp
	div.append(h3, p)

	section.append(div)
	return section
}