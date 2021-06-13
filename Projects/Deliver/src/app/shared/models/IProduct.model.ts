export interface IProduct {
    id: string,
    name: string,
    price: number,
    date: Date,
    thumbnailUrl: string,
    url: string,
    description?: string
}