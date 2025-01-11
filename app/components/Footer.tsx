import Image from "next/image";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


type FooterSection = {
    title: string;
    links: { label: string; href: string }[];
};

export function FooterSocial() {
  const socialLinks = [
    { icon: FaYoutube, href: "https://youtube.com/@MissionPhysicsOfficial" },
    { icon: HiOutlineMail, href: "https://mailto:missionphysics.official@gmail.com" },
    { icon: FaWhatsapp, href: "https://whatsapp.com/channel/0029Va90MBI6mYPEIAvFCB2W" },
  ];

  return (
    <div className="flex space-x-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            className="text-gray-400 hover:text-[#dea0ee] transition-colors"
          >
            <Icon className="h-6 w-6" />
          </a>
        );
      })}
    </div>
  );
}
  
export function FooterLinks({ sections }: { sections: FooterSection[] }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-[#263238] tracking-wider uppercase mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-500 hover:text-[#dea0ee] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
}

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      // { label: "Our Team", href: "#" },
      // { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Test Series",
    links: [
      { label: "IIT JAM", href: "/test-series/2" },
      { label: "JEST", href: "/test-series/1" },
      { label: "TIFR-GS_both I-PHD & PHD", href: "#" },
      { label: "CUET-PG_PH", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Test Series", href: "#" },
      // { label: "Sample Papers", href: "#" },
      // { label: "Previous Papers", href: "#" },
      // { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      // { label: "Terms of Service", href: "#" },
      // { label: "Privacy Policy", href: "#" },
      // { label: "FAQ", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Social */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Image src={'/images/logo_mp.png'} alt="logo" height={60} width={60} />
              <span className="text-2xl font-bold text-[#263238] ml-2">
                Mission<span className="text-[#dea0ee]">Physics</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-xs">
              Empowering students to excel in physics competitive examinations through comprehensive test series and expert guidance.
            </p>
            <FooterSocial />
          </div>

          {/* Links */}
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <FooterLinks sections={footerSections} />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} The Technova Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}