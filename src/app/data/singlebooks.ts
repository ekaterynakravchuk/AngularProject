import { IBook } from "../interfaces/interfaces";

export const singleBooks: IBook[] = [
    {
        id: 15,
        title: 'Mother Night',
        author: ' Kurt Vonnegut',
        yearOfPublishing: 1962,
        pages: 192,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/MotherNight%28Vonnegut%29.jpg/220px-MotherNight%28Vonnegut%29.jpg',
        genre: 'metafiction',
        description: 'Mother Night is a daring challenge to our moral sense. American Howard W. Campbell, Jr., a spy during World War II, is now on trial in Israel as a Nazi war criminal. But is he really guilty? In this brilliant book rife with true gallows humor, Vonnegut turns black and white into a chilling shade of gray with a verdict that will haunt us all.',
        rate: 5,
        cover: 'soft',
        price: 10
    },
    {
        id: 16,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        pages: 928,
        yearOfPublishing: 1315,
        image: 'https://d3fa68hw0m2vcc.cloudfront.net/79e/257939144.jpeg',
        genre: 'poetry',
        description: 'Belonging in the immortal company of the great works of literature, Dante Alighieri’s poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise—the sphere of universal harmony and eternal salvation.',
        rate: 4,
        cover: 'hard',
        price: 24.99
    }
]