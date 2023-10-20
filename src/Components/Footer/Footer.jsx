import React from 'react';

export default function Footer() {
  return (
    <div className="bottom-0 pl-20 pt-6left-0 w-full h-40 flex items-center" style={{ backgroundColor: '#626171' }}>
      <div className="container mx-auto text-white text-left">
        <div className="mb-2">
          <p className="text-3xl mb-4">TeamUp</p>
        </div>
        <div className="mb-2">
          <a href="#" className="text-sm text-gray-300 mr-5">About</a>
          <a href="#" className="text-sm text-gray-300 mr-5">Pricing</a>
          <a href="#" className="text-sm text-gray-300 mr-5">Contact</a>
          <a href="#" className="text-sm text-gray-300">Terms of Use</a>
        </div>
        <div>
          <p className="text-sm">&copy; 2023 TeamUp. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
