import { ArrowRight } from "lucide-react";
import { GraduationCap, BookOpen, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { TestSeriesArr } from '@/app/lib/testSeries';
import Link from "next/link";


export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#92E3A9]/10 to-white pt-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex flex-col-re md:flex-row items-center min-h-[50svh] md:min-h-[calc(100vh-4rem)] gap-12">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#263238] mb-6">
              Master Physics for
              <span className="text-[#dea0ee]"> Competitive Exams</span>
            </h1>
            <p className="text-lg text-gray-600 mb-3">
              Comprehensive test series and expert guidance for IIT JAM, JEST, and other competitive physics examinations.
            </p>
            <p className="text-gray-400 font-semibold mb-8">
              All the test series are live till your exam date
            </p>
            <Link href={"#test-series"} className="bg-[#dea0ee] text-gray-50 px-8 py-3 rounded-full font-semibold hover:bg-[#dea0ee] transition-colors">
              Explore Test Series
            </Link>
          </div>
          <div className="flex-1 hidden md:block">
            <Image src="/images/hero.png" alt="Physics Education" className="w-full max-w-[600px]" width={800} height={800} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Features() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#263238] mb-12">Why Choose Mission Physics?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<GraduationCap className="w-6 h-6 text-[#dea0ee]" />}
            title="Expert Faculty"
            description="Learn from experienced professors and researchers in physics."
          />
          <FeatureCard
            icon={<BookOpen className="w-6 h-6 text-[#dea0ee]" />}
            title="Comprehensive Coverage"
            description="Complete syllabus coverage with detailed solutions and explanations."
          />
          <FeatureCard
            icon={<ClipboardCheck className="w-6 h-6 text-[#dea0ee]" />}
            title="Regular Test Series"
            description="Practice with exam-pattern questions and improve your problem-solving skills."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="w-12 h-12 bg-[#eaa5fb]/20 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#263238] mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function TestSeries() {
  return (
    <section className="py-20 bg-gray-50" id="test-series">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#263238] mb-12">Available Test Series</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TestSeriesArr.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
              <Image src={item.coverImage} alt={item.title} width={500} height={500} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-[#263238] mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.date}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-baseline justify-start gap-2">
                  <h2 className="text-2xl font-bold text-[#eaa5fb] mb-2">₹{item.discountedPrice}</h2>
                  <p className="text-sm font-bold mb-2 line-through text-gray-400">₹{item.price}</p>
                  <p className="text-[#eaa5fb] font-semibold text-lg">{item.discount}% off</p>
                </div>
                <span className="text-xs bg-gradient-to-r from-purple-300 to-purple-400 text-white px-2 py-1 rounded-sm">
                  Early Bird Offer
                </span>
              </div>
              <span className="text-xs text-gray-500 font-semibold">
                ✦ only {item.seatLeft} seats left. Hurry up!!!
              </span>
              <Link href={`/test-series/${item.id}`} className="flex items-center justify-center gap-2 hover:gap-3 text-white rounded-md font-semibold bg-[#dea0ee] hover:bg-[#eaa5fb] px-2 py-2 hover:text-gray-100 mt-2 transition-colors">
                View more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Contact() {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-[#263238] mb-6">Ready to Start Your Journey?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Join Mission Physics today and take the first step towards your success.
        </p>
        <Link href="https://mailto:missionphysics.official@gmail.com" className="bg-[#dea0ee] text-gray-50 px-8 py-3 rounded-full font-semibold hover:bg-[#eaa5fb] transition-colors">
          Contact Us
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <TestSeries />
        <Features />
        <Contact />
      </main>
    </>
  );
}