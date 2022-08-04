const fetchResource = url =>
    fetch(url)
        .then(response => response.json())

export const fetchCharaters = () =>
    fetchResource('http://hp-api.herokuapp.com/api/characters')
export const fetchHouses = () =>
    fetchResource('https://www.potterapi.com/v1/houses?key=$2a$10$bOdlwCzJtQZOt5K11Ey85uSutbVH272IBlnSkbrspeGY7yOUBxbzG')
export const fetchSpells = () =>
    fetchResource('https://www.potterapi.com/v1/spells?key=$2a$10$bOdlwCzJtQZOt5K11Ey85uSutbVH272IBlnSkbrspeGY7yOUBxbzG')
