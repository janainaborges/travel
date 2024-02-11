interface ProductTypes{
    id: string
    name: string
    location: string
    image: string
    description: string
    price: {
        full: number
        discount: number
    }
    rating: {
        reviewsCount: number
        value: number
    }
}