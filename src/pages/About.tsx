import { Instagram, Twitter } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function About() {
  const team = [
    {
      name: 'David Adeyemi',
      role: 'Co-Founder/CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Chioma Okonkwo',
      role: 'Co-Founder/COO',
      image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Oluwaseun Afolabi',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative">
        <Navbar />
        
        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">Our Story</h1>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                Founded in 2023, Chopnow was born from a simple observation: students needed a better way to get food delivered to their halls. What started as a solution for one campus has grown into a comprehensive food delivery platform serving multiple institutions.
                <br /><br />
                Our mission is to make food delivery seamless, reliable, and enjoyable for every student. We partner with the best local vendors to ensure quality and variety, while our dedicated delivery team ensures your food arrives hot and fresh.
                <br /><br />
                Today, we're proud to serve thousands of students, making their campus life a little easier and a lot more delicious. Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Grocery bag"
                className="rounded-2xl w-full"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">Built by a team of passionate individuals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-white/60">{member.role}</p>
                  <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-white/60 hover:text-white">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-white/60 hover:text-white">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}