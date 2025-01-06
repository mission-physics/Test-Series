import { TestSeriesType } from "./types";

export const TestSeriesArr: TestSeriesType[] = [
  {
    id: 1,
    coverImage: "/images/card-cover.jpg",
    title: "JEST 2025 Premium Test Series",
    date: "Started on 1st Jan, 2025",
    price: 499,
    discount: 20,
    discountedPrice: 399,
    features: [
      "Detailed solution in PDF format",
      "Direct live interaction with paper setters",
      "Access of MP_JEST_2025_Official Class"
    ],
    description: "Experience 8 comprehensive full-length tests designed to cover all topics and elevate your preparation. Tailored to perfection, this test series simulates real exams, boosts your confidence, and helps you achieve your dream rank!",
    duration: "Live Now",
    paperSetters: [],
    reviews: [
      {
        id: 1,
        date: "12/01/2024",
        name: "Kushagra",
        college: "BANARAS HINDU UNIVERSITY",
        course: "BSc from BANARAS HINDU UNIVERSITY",
        review: `
            I got pretty low rank in IIT JAM but then start preparing for JEST the main problem was paper solving in which MISSION PHYSICS  test series help me alot  because of the relevancy with exam pattern and questions type 
    
    
            I got all India rank 103 in JEST 
    
            and RIGHT NOW I got admission  in NISSR BHUBANESWAR
        `
      }
    ],
    syllabus: [],
    totalTests: 8,
    schedule: [
      {
        testName: "JEST FLT01",
        endedOn: "01/01/2025",
        startedOn: "01/01/2025"
      },
      {
        testName: "JEST FLT02",
        endedOn: "04/01/2025",
        startedOn: "04/01/2025"
      },
      {
        testName: "JEST FLT03",
        endedOn: "11/01/2025",
        startedOn: "11/01/2025"
      },
      {
        testName: "JEST FLT04",
        endedOn: "18/01/2025",
        startedOn: "18/01/2025"
      },
      {
        testName: "JEST FLT05",
        endedOn: "25/01/2025",
        startedOn: "25/01/2025"
      },
      {
        testName: "JEST FLT06",
        endedOn: "01/02/2025",
        startedOn: "01/02/2025"
      },
      {
        testName: "JEST FLT07",
        endedOn: "08/02/2025",
        startedOn: "08/02/2025"
      },
      {
        testName: "JEST FLT08",
        endedOn: "15/02/2025",
        startedOn: "15/02/2025"
      },
    ]
  },
  {
    id: 2,
    coverImage: "/images/card-cover.jpg",
    title: "JEST Physics",
    date: "Starting from July 1st",
    price: 2499,
    discount: 20,
    discountedPrice: 1999,
    features: [],
    description: "",
    duration: "",
    paperSetters: [],
    reviews: [],
    syllabus: [],
    totalTests: 0,
    schedule: []
  },
  {
    id: 3,
    coverImage: "/images/card-cover.jpg",
    title: "GATE Physics",
    date: "Starting from August 1st",
    price: 3499,
    discount: 20,
    discountedPrice: 2799,
    features: [],
    description: "",
    duration: "",
    paperSetters: [],
    reviews: [],
    syllabus: [],
    totalTests: 0,
    schedule: []
  },
];
