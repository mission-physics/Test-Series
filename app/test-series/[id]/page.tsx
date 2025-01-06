"use client";

import { TestSeriesArr } from "@/app/lib/testSeries";
import { ReviewType, TestSeriesType } from "@/app/lib/types";
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export function TestSeriesHeader( testSeries : TestSeriesType) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-[#263238] mb-2">
        {testSeries.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span>Duration: {testSeries.duration}</span>
        <span>•</span>
        <span>Total Tests: {testSeries.totalTests}</span>
      </div>
      {/* <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 fill-[#92E3A9] text-[#92E3A9]"
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">(128 Reviews)</span>
        <span className="text-sm text-gray-600">•</span>
        <span className="text-sm text-gray-600">256 Students Enrolled</span>
      </div> */}
    </div>
  );
}

export function TestSeriesDescription(testSeries: TestSeriesType) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-[#263238] mb-4">Description</h2>
          <p className="text-gray-600">
            {testSeries.description}
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-[#263238] mb-4">What {"You'll"} Get</h2>
          <ul className="space-y-3 text-gray-600">
            {
              testSeries.features.map((feature, index) => <li key={index}>• {feature}</li>)
            }
          </ul>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-[#263238] mb-4">Syllabus Coverage</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• Classical Mechanics</li>
            <li>• Electromagnetic Theory</li>
            <li>• Quantum Mechanics</li>
            <li>• Thermodynamics & Statistical Physics</li>
            <li>• Modern Physics</li>
            <li>• Electronics & Experimental Methods</li>
          </ul>
        </section>
      </div>
    );
}


export function TestSeriesPurchaseCard(testSeries: TestSeriesType ) {
    const handleCourseEnroll = () => {
      window.open(`https://wa.me/${8436582775}?text=${encodeURI(`Hi, I want to enroll for ${testSeries.title}`)}.`, '_blank');
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Image src={testSeries.coverImage} alt={testSeries.title} width={500} height={500} className="rounded-md mb-4" />
        <div className="mb-6">
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="text-3xl font-bold text-[#263238] mb-2">₹{testSeries.discountedPrice}</h2>
            <p className="text-sm font-bold mb-2 line-through text-gray-400">₹{testSeries.price}</p>
            <p className="text-[#dea0ee] font-semibold text-lg">{testSeries.discount}% off</p>
          </div>
          <span className="text-xs bg-gradient-to-r from-purple-300 to-purple-400 text-white px-2 py-1 rounded-sm">
            Early Bird Offer
          </span>
          <p className="text-sm text-gray-500 mt-2">One-time payment, access till the tests going on</p>
        </div>
  
        <button onClick={handleCourseEnroll} className="w-full bg-[#dea0ee] text-gray-50 py-3 px-6 rounded-full font-semibold hover:bg-[#eaa5fb] transition-colors mb-4">
          Enroll Now
        </button>
  
        <div className="space-y-4">
          <h3 className="font-semibold text-[#263238]">This course includes:</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            {
              testSeries.features.map((feature, index) => <li key={index}>✓ {feature}</li>)
            }
          </ul>
        </div>
      </div>
    );
}


export function ScheduleTable(testSeries: TestSeriesType) {
  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-semibold text-[#263238] mb-4">Schedule</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left text-[#dea0ee] font-medium border-b border-gray-300">Test Name</th>
            <th className="p-3 text-left text-[#dea0ee] font-medium border-b border-gray-300">Started On</th>
            <th className="p-3 text-left text-[#dea0ee] font-medium border-b border-gray-300">Ended On</th>
          </tr>
        </thead>
        <tbody>
          {testSeries.schedule.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
              <td className="p-3 border-b border-gray-300 text-gray-600">{item.testName}</td>
              <td className="p-3 border-b border-gray-300 text-gray-600">{item.startedOn}</td>
              <td className="p-3 border-b border-gray-300 text-gray-600">{item.endedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CarouselButton({ direction, onClick }: { direction: string, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[#dea0ee] p-2 rounded-full hover:bg-[#c77fd7] transition-colors shadow-md"
      aria-label={`${direction === 'left' ? 'Previous' : 'Next'} review`}
    >
      {direction === 'left' ? (
        <ChevronLeft className="text-white w-4 h-4" />
      ) : (
        <ChevronRight className="text-white w-4 h-4" />
      )}
    </button>
  );
};


export function ReviewCarousel(testSeries: TestSeriesType) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testSeries.reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testSeries.reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative max-w-md mx-auto">
      <div className="overflow-hidden px-8">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testSeries.reviews.map((review) => (
            <div key={review.id} className="w-full flex-shrink-0 px-1">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2">
        <CarouselButton direction="left" onClick={handlePrev} />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <CarouselButton direction="right" onClick={handleNext} />
      </div>
    </div>
  );
};

export function ReviewCard( review: ReviewType ) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <Calendar size={16} />
        <span className="text-sm">{review.date}</span>
      </div>
      
      <h3 className="font-bold text-gray-800 mb-2">{review.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{review.college}</p>
      
      <p className="text-gray-700 text-sm whitespace-pre-line">{review.review}</p>
    </div>
  );
};

export default function TestSeriesDetails() {
  const pathname = usePathname();

  // Get the taskid from the URL
  const testSeriesId = pathname.split("/")[2];
  const requrestedTestSeries = TestSeriesArr.filter((testSeries) => testSeries.id.toString() === testSeriesId)[0];

  return (
    <div className="min-h-screen bg-gray-50  pt-16">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            <TestSeriesHeader {...requrestedTestSeries} />
            <TestSeriesDescription {...requrestedTestSeries} />
            <ScheduleTable {...requrestedTestSeries} />

            <div className="w-full flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-sm space-y-6">
            <h2 className="text-xl font-semibold text-[#263238] text-left w-full mb-4">Reviews</h2>
              {
                requrestedTestSeries.reviews.length > 0 ? (
                  <ReviewCarousel {...requrestedTestSeries} />
                ) : (
                  <div className="w-full flex-shrink-0 px-1">
                    <p className="text-gray-400">no reviews yet</p>
                  </div>
                )
              }
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <TestSeriesPurchaseCard {...requrestedTestSeries} />
          </div>
        </div>
      </div>
    </div>
  );
}