import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] bg-[#F9F6F1]/80 backdrop-blur-sm flex flex-col items-center justify-center min-h-screen">
      {/* Decorative Spinner */}
      <div className="relative flex items-center justify-center w-24 h-24 mb-6">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin"></div>
        
        {/* Inner pulsing star/dot */}
        <div className="w-4 h-4 bg-orange-600 rounded-full animate-pulse"></div>
      </div>
      
      {/* Loading Text */}
      <div className="flex flex-col items-center space-y-2">
        <h3 className="font-serif text-xl font-medium text-gray-900 tracking-wide">
          Seeking Guidance
        </h3>
        <p className="text-gray-500 text-sm tracking-widest uppercase animate-pulse">
          Please wait...
        </p>
      </div>
    </div>
  );
}
