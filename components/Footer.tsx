import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
          <p className="max-w-md mx-auto mb-6">Do you have any questions about the product? Reach out to us.</p>
          <div className="flex justify-center">
             <a href="mailto:dtingey31@gmail.com" className="text-xl font-semibold text-red-500 hover:text-red-400 transition-colors duration-300 tracking-wider">
                dtingey31@gmail.com
             </a>
          </div>
        </div>

        <div className="text-2xl font-black tracking-wider text-white mb-4">
            i<span className="text-red-500">Spy</span>
        </div>
        
        <p>&copy; {new Date().getFullYear()} iSpy Technologies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;