export interface Card{
    name: string,
    id: number,
    front_pic_normal: string,
    back_pic_normal: string,
    shiny_pic_front: string,
    shiny_pic_back: string,
    types: string[],
    weight: number,
    height: number,
    attack: number
}