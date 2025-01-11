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
    paperSetters: string[] | string,
    features: string[],
    syllabus: string,
    schedule: ScheduleType[],
    seatLeft: number
}

export type ReviewType = {
    id: number,
    name: string,
    college: string,
    course: string,
    review: string,
    date: string,
}

export type ScheduleType = {
    testName: string,
    startedOn: string,
    endedOn: string,
}