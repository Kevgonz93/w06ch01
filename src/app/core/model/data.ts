import { Serie } from "./model";

export const getSeries = async () : Promise<Serie[]> => [
    {
        id: 1,
        name: "Breaking Bad",
        gender: "Drama",
        realseYear: 2008,
        episodes: 62,
        onAir: false
    },
    {
        id: 2,
        name: "Game of Thrones",
        gender: "Fantasía",
        realseYear: 2011,
        episodes: 73,
        onAir: false
    },
    {
        id: 3,
        name: "Friends",
        gender: "Comedia",
        realseYear: 1994,
        episodes: 236,
        onAir: false
    },
    {
        id: 4,
        name: "Stranger Things",
        gender: "Ciencia ficción",
        realseYear: 2016,
        episodes: 34,
        onAir: true
    },
    {
        id: 5,
        name: "The Crown",
        gender: "Drama histórico",
        realseYear: 2016,
        episodes: 40,
        onAir: true
    },
    {
        id: 6,
        name: "The Office",
        gender: "Comedia",
        realseYear: 2005,
        episodes: 201,
        onAir: false
    },
    {
        id: 7,
        name: "Sherlock",
        gender: "Detective",
        realseYear: 2010,
        episodes: 15,
        onAir: false
    },
    {
        id: 8,
        name: "Black Mirror",
        gender: "Ciencia ficción",
        realseYear: 2011,
        episodes: 22,
        onAir: false
    },
    {
        id: 9,
        name: "Stranger Things",
        gender: "Ciencia ficción",
        realseYear: 2016,
        episodes: 34,
        onAir: true
    },
    {
        id: 10,
        name: "Narcos",
        gender: "Drama",
        realseYear: 2015,
        episodes: 30,
        onAir: false
    },
    {
        id: 11,
        name: "The Mandalorian",
        gender: "Ciencia ficción",
        realseYear: 2019,
        episodes: 24,
        onAir: true
    },
    {
        id: 12,
        name: "Chernobyl",
        gender: "Drama histórico",
        realseYear: 2019,
        episodes: 5,
        onAir: false
    },
    {
        id: 13,
        name: "Fargo",
        gender: "Drama",
        realseYear: 2014,
        episodes: 40,
        onAir: false
    },
    {
        id: 14,
        name: "The Witcher",
        gender: "Fantasía",
        realseYear: 2019,
        episodes: 16,
        onAir: true
    },
    {
        id: 15,
        name: "Peaky Blinders",
        gender: "Drama histórico",
        realseYear: 2013,
        episodes: 30,
        onAir: true
    },
    {
        id: 16,
        name: "Breaking Bad",
        gender: "Drama",
        realseYear: 2008,
        episodes: 62,
        onAir: false
    },
    {
        id: 17,
        name: "The Big Bang Theory",
        gender: "Comedia",
        realseYear: 2007,
        episodes: 279,
        onAir: false
    },
    {
        id: 18,
        name: "The Haunting of Hill House",
        gender: "Terror",
        realseYear: 2018,
        episodes: 10,
        onAir: false
    },
    {
        id: 19,
        name: "Money Heist (La Casa de Papel)",
        gender: "Drama",
        realseYear: 2017,
        episodes: 31,
        onAir: true
    },
    {
        id: 20,
        name: "Vikings",
        gender: "Drama histórico",
        realseYear: 2013,
        episodes: 89,
        onAir: false
    },
    {
        id: 21,
        name: "Dexter",
        gender: "Drama",
        realseYear: 2006,
        episodes: 96,
        onAir: false
    },
    {
        id: 22,
        name: "The Walking Dead",
        gender: "Terror",
        realseYear: 2010,
        episodes: 177,
        onAir: true
    },
    {
        id: 23,
        name: "Dark",
        gender: "Ciencia ficción",
        realseYear: 2017,
        episodes: 26,
        onAir: false
    },
    {
        id: 24,
        name: "Westworld",
        gender: "Ciencia ficción",
        realseYear: 2016,
        episodes: 28,
        onAir: true
    },
    {
        id: 25,
        name: "Brooklyn Nine-Nine",
        gender: "Comedia",
        realseYear: 2013,
        episodes: 153,
        onAir: true
    },
    {
        id: 26,
        name: "Mindhunter",
        gender: "Drama",
        realseYear: 2017,
        episodes: 19,
        onAir: false
    },
    {
        id: 27,
        name: "Better Call Saul",
        gender: "Drama",
        realseYear: 2015,
        episodes: 63,
        onAir: true
    },
    {
        id: 28,
        name: "The Boys",
        gender: "Superhéroes",
        realseYear: 2019,
        episodes: 16,
        onAir: true
    },
    {
        id: 29,
        name: "House of Cards",
        gender: "Drama político",
        realseYear: 2013,
        episodes: 73,
        onAir: false
    },
    {
        id: 30,
        name: "The Handmaid's Tale",
        gender: "Drama",
        realseYear: 2017,
        episodes: 45,
        onAir: true
    }
];

export const repo = {getSeries}
