const KEY = 'POKEMON'

export function getPokemon () {
  return JSON.parse(localStorage.getItem(KEY))
}

export function savePokemon (data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}
