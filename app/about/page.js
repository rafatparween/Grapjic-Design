// components/MicroSonicShowcase.jsx
'use client';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import JivoChat from "../JivoChat";

 // Mark as Client Component if using Next.js 13+

const MicroSonicShowcase = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Next.js optimized for instant page loads',
      color: 'from-amber-400 to-amber-600'
    },
    {
      icon: '🎨',
      title: 'Pixel Perfect',
      description: 'Tailwind CSS crafted designs',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Flawless on all devices',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: '🚀',
      title: 'Modern Stack',
      description: 'Next.js + Tailwind CSS',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 mt-[30px]">
          Micro-Sonic
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        At Micro Sonic, we are passionate about creating seamless digital experiences that are not only powerful under the hood but also visually captivating. Built on cutting-edge technologie
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`bg-gradient-to-br ${feature.color} rounded-2xl p-0.5 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="bg-gray-900 rounded-2xl p-6 h-full flex flex-col">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300 flex-grow">{feature.description}</p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <button className="text-sm font-medium text-white hover:underline">
                  Learn more →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-2xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to experience Micro-Sonic?</h2>
        <button className="relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold overflow-hidden group">
          <span className="relative z-10">Get Started Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
        <p className="mt-4 text-gray-400">Free forever. No credit card required.</p>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(40px)',
              animation: `float ${Math.random() * 20 + 10}s infinite alternate`
            }}
          />
        ))}
      </div>
    </div>
    <Footer/>
    <JivoChat/>
    </>
  );
};

export default MicroSonicShowcase;