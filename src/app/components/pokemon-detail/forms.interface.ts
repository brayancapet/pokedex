export interface PokemonForm {
    form_name: string,
    is_mega: boolean,
    name: string,
    sprites: {
        [key: string]: sprites
    },
    types: [
        type: {
            type: {
                name: string
            }
        }
    ]
}
export interface sprites { 
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string
}


