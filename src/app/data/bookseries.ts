import { IBookSeries } from "../interfaces/interfaces"

export const seriesBook: IBookSeries[] = [
    {
        id: 11,
        title: 'The Fellowship of the Ring',
        author: 'J.R.R.Tolkien',
        yearOfPublishing: 1954,
        pages: 423,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/The_Fellowship_of_the_Ring_cover.gif/220px-The_Fellowship_of_the_Ring_cover.gif',
        genre: 'fantasy',
        description: 'In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose.',
        rate: 5,
        cover: 'hard',
        price: 11,
        bookSerieTitle: 'LOTR',
        nextBook: 'Two Towers'
    }
] 
