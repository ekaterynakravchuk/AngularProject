export interface ICustomer {
    readonly id: number,
    name: string,
    birthDate: Date,
    age: () => number,
    email: string,
    discount: () => boolean
}

export interface IBook {
    readonly id: number,
    title: string,
    author: string,
    yearOfPublishing: number,
    pages: number
    image: string
    bookSeries: boolean,
    genre: string,
    description: string,
    rate: number,
    cover: string,
    price: number
}

export interface IBookSeries extends IBook {
    seriesTitle: string,
    prevBook?: string,
    nextBook?: string
}

export interface IOrder {
    readonly id: number,
    items: number[],
    totalPrice: () => number
}