import React from 'react';

export default function Footer() {
  return (
    <div className="bottom-0 left-0 w-full h-32 flex items-center" style={{ backgroundColor: '#1f1d34' }}>
      <div className="container mx-auto text-white text-left">
        <div className="mb-2">
          <p className="text-2xl">TeamUp</p>
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
