import { GraduationCap, Users, Target } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#dea0ee]/10 to-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#263238] mb-6">
            Our <span className="text-[#dea0ee]">Story</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Mission Physics, {"we're"} more than just an educational platform. 
            {"We're"} a community dedicated to making physics education accessible to everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold text-[#263238] mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-6">
                Here, in Mission Physics we just not provide affordable high-quality physics education, 
                we are also into making physics accessible to everyone. We use online learning platforms 
                and video conferencing to reach students all over the country.
              </p>
              <p className="text-gray-600 mb-6">
                We knew that we would face challenges along the way, but we were determined to succeed. 
                We worked hard to develop a platform that was both user-friendly and educationally sound. 
                We also partnered with some of the exam toppers, best teachers and experts to create our content. 
                And finally, we have you on our platform, reading our story.
              </p>
              <p className="text-gray-600">
                Mission Physics is not just a new edtech organisation, {"it's"} the dream for all physics enthusiasts. 
                We are excited to continue to grow and wish not to limit us online only to reach even more students. 
                We believe that we have the potential to change the world, and we are committed to making that happen.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#dea0ee]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-[#dea0ee]" />
              </div>
              <h3 className="text-xl font-semibold text-[#263238] mb-2">Quality Education</h3>
              <p className="text-gray-600">Providing affordable high-quality physics education to students nationwide</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#dea0ee]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#dea0ee]" />
              </div>
              <h3 className="text-xl font-semibold text-[#263238] mb-2">Expert Teachers</h3>
              <p className="text-gray-600">Partnering with exam toppers and experienced educators</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#dea0ee]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#dea0ee]" />
              </div>
              <h3 className="text-xl font-semibold text-[#263238] mb-2">Accessible Learning</h3>
              <p className="text-gray-600">Using technology to reach students across the country</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#263238] mb-6">Join Our Journey</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of our mission to make quality physics education accessible to everyone.
          </p>
          <button className="bg-[#dea0ee] text-[#263238] px-8 py-3 rounded-full font-semibold hover:bg-[#82d399] transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </main>
  );
}