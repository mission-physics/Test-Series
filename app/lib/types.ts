export type TestSeriesType = {
    id: number,
    coverImage: string,
    title: string,
    date: string,
    price: number,
    discount: number,
    discountedPrice: number,
    duration: string,
    totalTests: number,
    reviews: ReviewType[],
    description: string,
    paperSetters: PaperSetterType[],
    courseIncludes: string[],
    syllabus: string[],
}

type ReviewType = {
    id: number,
    name: string,
    rating: number,
    review: string,
    date: string,
}

type PaperSetterType = {
    id: number,
    name: string,
    designation: string,
    institutiom: string,
    description: string,
}