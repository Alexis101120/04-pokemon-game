import pokemonApi from "../api/pokemonAPI"
const getPokemons = () =>{
    const pokemonsArr = Array.from(Array(650))
    return pokemonsArr.map((_ , index) => index + 1)
}

const getPokemonOptions = async () => {
    const  mixedPokemons =getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4))
    return pokemons
}

const getPokemonNames = async ([a,b,c,d]=[]) => {
    // const resp = await pokemonApi.get(`/${a}`)
    // console.log(resp.data.name)
    const promiseArr = [
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`)
    ]

    
    const [respa, respb, respc, respd] = await Promise.all(promiseArr)
    return [
        { name : respa.data.name, id: respa.data.name },
        { name : respb.data.name, id: respb.data.name },
        { name : respc.data.name, id: respc.data.name },
        { name : respd.data.name, id: respd.data.name },
    ]
}

export default getPokemonOptions