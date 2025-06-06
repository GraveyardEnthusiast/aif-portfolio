import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{
          filter: `brightness(${1 - scrollY / 1000})`,
        }}
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full animate-gradient-bg blur-2xl opacity-60" />
        </div>

        {/* Name + Tagline */}
        <div className="relative z-10">
          <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            Runo Alibor
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl text-gray-200">
            Year 12 student who’s always tinkering with tech, exploring creative ideas, and helping out wherever I can.
          </p>
          <a
            href="#about"
            className="mt-8 inline-block px-6 py-3 text-lg text-black bg-white rounded-full shadow-xl hover:bg-gray-200 transition-all"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-gray-900 text-center text-gray-300 relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 px-6">
          <h2 className="text-5xl font-bold mb-8">About Me</h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
            Hey! I’m Runo - a Year 12 student at Hope Christian College. I’m also a Senior Community Leader and the Society & Environmental Captain. 
            Outside of school, I volunteer on the AV team at Hope Central down in Elizabeth, where I run the lyrics with ProPresenter and help with lighting. 
            I’m super interested in tech, systems, and the way everything connects together.
          </p>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className="py-20 bg-gray-800 text-center">
        <h2 className="text-5xl font-bold text-white mb-8">My Subjects</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto text-gray-300">
          <li className="hover:scale-105 transition-all"><strong>📚 English Literature</strong></li>
          <li className="hover:scale-105 transition-all"><strong>➗ Essential Mathematics</strong></li>
          <li className="hover:scale-105 transition-all"><strong>💻 Digital Technologies</strong></li>
          <li className="hover:scale-105 transition-all"><strong>🤖 AIF AIF</strong></li>
          <li className="hover:scale-105 transition-all"><strong>📈 Business Studies</strong></li>
          <li className="hover:scale-105 transition-all"><strong>💬 Digital Communication Solutions</strong></li>
          <li className="hover:scale-105 transition-all"><strong>✝️ Spiritual, Religious & Meaning</strong></li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-[#f72585] to-[#4338ca] text-center">
        <h2 className="text-5xl font-bold text-white mb-8">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Server Management', desc: 'I manage web servers, VPS hosting, email systems, and domain setups.' },
            { title: 'Security', desc: 'From Cloudflare WAF to Zero Trust networks, I like to make things secure and solid.' },
            { title: 'Device Management', desc: 'Automating work  laptops and scripts with MDM systems' },
            { title: 'Cloud Platforms', desc: 'I use tools like Cloudflare, Entra ID, and Okta for access control and domain setups.' },
            { title: 'Identity Management', desc: 'SSO, Clerk, and entra  directory setups' },
            { title: 'Internal Tools', desc: 'Deployed and managed internal tools like ERPs and shared inboxes that help teams work better.' },
          ].map((skill, index) => (
            <div key={index} className="p-8 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-700 text-center text-gray-200">
        <h2 className="text-5xl font-bold mb-8">Get in Touch</h2>
        <p className="mb-6">Want to ask a questions, or just say hi? I’m always happy to chat.</p>
        <a
          href="mailto:efemenaruno@gmail.com"
          className="inline-block px-6 py-3 text-lg text-black bg-white rounded-full shadow-lg hover:bg-gray-200 transition-all"
        >
          Send me an email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500 text-xs">
        <div className="max-w-screen-lg mx-auto">
          <p>&copy; {new Date().getFullYear()} Runo Alibor. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-gray-400 transition-all">LinkedIn</a>
            <a href="#" className="hover:text-gray-400 transition-all">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
