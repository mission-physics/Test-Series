"use client";

import { TestSeriesArr } from "@/app/lib/testSeries";
import { TestSeriesType } from "@/app/lib/types";
import { Star } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function TestSeriesHeader( testSeries : TestSeriesType) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-[#263238] mb-2">
        {testSeries.title}
      </h1>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span>Duration: 6 months</span>
        <span>•</span>
        <span>Total Tests: 24</span>
      </div>
      <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
}

export function TestSeriesDescription() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-[#263238] mb-4">Description</h2>
          <p className="text-gray-600">
            Comprehensive test series designed specifically for IIT JAM Physics aspirants. Our series includes
            topic-wise tests, full-length mock tests, and previous year papers with detailed solutions.
          </p>
        </section>
  
        <section>
          <h2 className="text-xl font-semibold text-[#263238] mb-4">What {"You'll"} Get</h2>
          <ul className="space-y-3 text-gray-600">
            <li>• 12 Topic-wise Tests</li>
            <li>• 8 Full-length Mock Tests</li>
            <li>• 4 Previous Year Solved Papers</li>
            <li>• Detailed Solutions and Explanations</li>
            <li>• Performance Analytics</li>
            <li>• Doubt Resolution Support</li>
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
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <Image src={testSeries.coverImage} alt={testSeries.title} width={500} height={500} className="rounded-md mb-4" />
        <div className="mb-6">
          <div className="flex items-baseline justify-start gap-2">
            <h2 className="text-3xl font-bold text-[#263238] mb-2">₹{testSeries.discountedPrice}</h2>
            <p className="text-sm font-bold mb-2 line-through text-gray-400">₹{testSeries.price}</p>
            <p className="text-[#82d399] font-semibold text-lg">{testSeries.discount}% off</p>
          </div>
          <span className="text-xs bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-sm">
            Early Bird Offer
          </span>
          <p className="text-sm text-gray-500 mt-2">One-time payment, lifetime access</p>
        </div>
  
        <button className="w-full bg-[#92E3A9] text-[#263238] py-3 px-6 rounded-full font-semibold hover:bg-[#82d399] transition-colors mb-4">
          Enroll Now
        </button>
  
        <div className="space-y-4">
          <h3 className="font-semibold text-[#263238]">This course includes:</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>✓ 6 months access</li>
            <li>✓ 24 practice tests</li>
            <li>✓ Detailed solutions</li>
            <li>✓ Performance analytics</li>
            <li>✓ Mobile-friendly interface</li>
            <li>✓ Doubt resolution support</li>
          </ul>
        </div>
      </div>
    );
}


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
            <TestSeriesDescription />
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