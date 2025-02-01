import { Apple } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student, Nelson Hall',
      content: 'Chopnow has been a game-changer for me! As a busy student, being able to order food directly to my hall has saved me so much time. The delivery is always quick and the food arrives hot.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Student, Samuel Hall',
      content: "The variety of food options on Chopnow is amazing! From local favorites to healthy choices, there's something for everyone. The app is super easy to use too!",
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    },
    {
      name: 'Emma Davis',
      role: 'Student, White Hall',
      content: "What I love most about Chopnow is the reliability. Whether it's late-night study sessions or busy weekends, I can always count on them for quick and efficient delivery.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[100vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10">
          <Navbar />

          <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-32">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 max-w-xl">
              Order food directly to your hall
            </h1>
            <p className="text-white/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg">
              Get your favorite meals delivered straight to your doorstep. From local delicacies to international cuisine, we've got your cravings covered.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors w-full sm:w-auto">
                <Apple className="w-5 h-5" />
                <span>iPhone</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-black px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors w-full sm:w-auto">
                <span>Android</span>
              </button>
            </div>

            <div className="mt-8 sm:mt-12">
              <p className="text-white mb-4">Popular Vendors</p>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                {['BUSA', 'BGH', 'BABRITE', 'BABCOCK FOODS', 'BABCOCK FRUITS'].map((vendor) => (
                  <span key={vendor} className="text-white/80 text-sm">{vendor}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-12 sm:mb-16">We deliver everything you love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Drinks</h3>
              <p className="text-gray-600 mb-6">
                Stay refreshed with our wide selection of beverages. From sodas to smoothies, we deliver your favorite drinks right to your door.
              </p>
              <img
                src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Drinks"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Snacks</h3>
              <p className="text-gray-600 mb-6">
                Satisfy your cravings with our variety of snacks. Perfect for study sessions or movie nights, we've got all your favorite treats.
              </p>
              <img
                src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Snacks"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Food</h3>
              <p className="text-gray-600 mb-6">
                From local delicacies to international cuisine, enjoy a wide range of delicious meals delivered hot and fresh to your location.
              </p>
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                alt="Food"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-black py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">What our users have to say</h2>
            <div className="flex space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`bg-white/10 p-6 sm:p-8 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white/20 ${
                  index === currentTestimonial 
                    ? 'opacity-100 scale-105 ring-2 ring-orange-500' 
                    : 'opacity-50 scale-100 hover:opacity-75'
                }`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm sm:text-base">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">Common Questions</h2>
          <div className="space-y-4 sm:space-y-6 max-w-3xl">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 sm:p-6 bg-gray-50 rounded-xl">
                <span className="text-base sm:text-lg font-medium">How long does delivery usually take?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronRight className="w-5 h-5" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 px-4 sm:px-6">
                Our average delivery time is 15-30 minutes, depending on your location and the vendor. You can track your order in real-time through our app to know exactly when it will arrive.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 sm:p-6 bg-gray-50 rounded-xl">
                <span className="text-base sm:text-lg font-medium">What payment methods do you accept?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronRight className="w-5 h-5" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 px-4 sm:px-6">
                We accept various payment methods including credit/debit cards, mobile money, and cash on delivery. All online payments are processed securely through our platform.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer p-4 sm:p-6 bg-gray-50 rounded-xl">
                <span className="text-base sm:text-lg font-medium">What if there's an issue with my order?</span>
                <span className="transition group-open:rotate-180">
                  <ChevronRight className="w-5 h-5" />
                </span>
              </summary>
              <p className="mt-4 text-gray-600 px-4 sm:px-6">
                Our customer support team is available 24/7 to help with any issues. You can contact us through the app or call our support line, and we'll resolve your concern promptly.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Contact us</h2>
              <p className="text-gray-600 mb-6">
                Have questions or feedback? We'd love to hear from you. Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  placeholder="Hall"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}