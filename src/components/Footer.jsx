import React from 'react'
import { SiBehance, SiFacebook, SiInstagram, SiLinkedin } from 'react-icons/si';


const Footer = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        {/* Navigation Links */}
        {/* <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map((link) => (
            <div className="px-5 py-2" key={link}>
              <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                {link}
              </a>
            </div>
          ))}
        </nav> */}
        <div className='justify-center'>
          <p className='text-xl md:text-4xl font-bold text-center cursor-pointer hover:text-blue-600 transition-all duration-300'>Lélio Chemane</p>
        </div>
        

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a href="">
            <div className='text-xl md:text-2xl hover:text-blue-500 transition-all duration-300'>
            <SiFacebook />
            </div>
          </a>
          <a href="">
            <div className='text-xl md:text-2xl hover:text-red-500 transition-all duration-300'>
            <SiInstagram />
            </div>

          </a>
          <a href="">
            <div className='text-xl md:text-2xl hover:text-blue-500 transition-all duration-300'>
            <SiBehance />
            </div>
          </a>
          <a href="">
            <div className='text-xl md:text-2xl hover:text-blue-500 transition-all duration-300'>
              <SiLinkedin />
            </div>
          </a>
          
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-center'>
          <p className="text-sm md:text-2xl text-center text-gray-500">
            &copy; 2025 Lélio Chemane. Todos os direitos reservados.
          </p>
           
        </div>
      </div>
    </section>
  );
};

export default Footer;
