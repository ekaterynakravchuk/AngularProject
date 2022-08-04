export interface ICustomer {
    readonly id: number,
    name: string,
    birthDate: Date,
    email: string
}

export interface IBook {
    readonly id: number,
    title: string,
    author: string,
    yearOfPublishing: number,
    pages: number,
    image: string,
    genre: string,
    description: string,
    rate: number,
    cover: string,
    price: number
}

export interface IBookSeries extends IBook {
    bookSerieTitle: string,
    prevBook?: string,
    nextBook?: string
}

export interface IBirthdayDiscount extends ICustomer {
    currentDate: Date,
    discount: () => boolean
}

export interface IOrder {
    readonly id: number,
    items: number[],
    discount: IBirthdayDiscount,
    totalPrice: () => number
}