"use client";

import React, { useEffect, ReactNode } from 'react';

const Gradient = ({ children }: { children: ReactNode }) => {
    // Now the hook is inside the component—happy React!
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        25% { background-position: 50% 100%; }
        50% { background-position: 100% 50%; }
        75% { background-position: 50% 0%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        25% { transform: translate(40px, -60px) scale(1.2); }
        50% { transform: translate(-20px, 20px) scale(0.9); }
        75% { transform: translate(-40px, -40px) scale(1.1); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      
      .animate-gradient {
        background-size: 300% 300%;
        animation: gradient 20s ease infinite;
      }
      
      .animate-blob {
        animation: blob 12s infinite cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      .animation-delay-6000 {
        animation-delay: 6s;
      }
      
      .animation-delay-8000 {
        animation-delay: 8s;
      }
    `;
        document.head.appendChild(style);

        // Clean up on unmount
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Enhanced gradient background with more colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 animate-gradient">
                {/* Multiple colorful blur effect layers */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-blob" />
                <div className="absolute top-3/4 right-0 w-1/2 h-1/2 bg-purple-500/30 rounded-full blur-3xl transform translate-x-1/2 animate-blob animation-delay-2000" />
                <div className="absolute bottom-0 left-1/2 w-1/2 h-1/2 bg-pink-500/30 rounded-full blur-3xl transform -translate-x-1/2 animate-blob animation-delay-4000" />
                <div className="absolute top-1/2 left-1/4 w-1/2 h-1/2 bg-yellow-500/30 rounded-full blur-3xl animate-blob animation-delay-6000" />
                <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-green-500/30 rounded-full blur-3xl animate-blob animation-delay-8000" />
            </div>

            {/* Content layer */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default Gradient;
