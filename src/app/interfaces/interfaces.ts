export interface ICustomer {
    readonly id: number,
    name: string,
    birthDate: Date,
    age: () => number,
    email: string
}

export interface IBook {
    readonly id: number,
    title: string,
    author: string,
    yearOfPublishing: number,
    pages: number
    image: string
    bookSeries?: string,
    genre: string,
    description: string,
    rate: number,
    cover: string,
    price: number
}

export interface IBookSeries extends IBook {
    prevBook?: string,
    nextBook?: string
}

export interface IDiscount extends ICustomer {
    date: Date,
    discount: () => number
}

export interface IOrder extends IDiscount {
    readonly id: number,
    items: number[],
    totalPrice: () => number
}