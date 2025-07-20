import React from 'react';
import Link from 'next/link';

// import logo from './logo.png'; // Tell webpack this JS file uses this image

export default function Navbar(){
    return (   
    <nav className="flex justify-between items-center px-6 py-4 bg-bg-[#A8653D] shadow-md">
        <h1 className="text-2xl font-semibold text-white">Soulful Bowl🍃</h1>
        <ul className="flex space-x-6 text-white-700 font-medium">
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="/">Home</Link></li>          
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./recipes">Recipes</Link></li>    
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./articles">Articles</Link></li>
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./videos">Videos</Link></li>
        </ul>
        
    </nav>
    )
}

{/* <nav className="bg-[#fefdf8] shadow-md py-4"> */}
        {/* Logo and Brand Name in Center */}
        // <div className="flex flex-col items-center">
        //   <img 
        //     src="/logo.png" // Place your logo in /public/logo.png
        //     alt="Soulful Bowl Logo"
        //     className="w-24 h-24 mb-2"
        //   />
        //   {/* <h1 className="text-2xl font-bold text-green-800">Soulful Bowl</h1> */}
        // </div>

        // export default function Navbar() {
        //     return (
        //       <nav className="flex items-center justify-between px-6 py-4 bg-[#fefdf8] shadow-md relative">
                
        //         {/* Nav links on the left */}
        //         <ul className="flex space-x-6 text-gray-700 font-medium">
        //           <li className="hover:text-green-600 cursor-pointer">Home</li>
        //           <li className="hover:text-green-600 cursor-pointer">Recipes</li>
        //           <li className="hover:text-green-600 cursor-pointer">Articles</li>
        //           <li className="hover:text-green-600 cursor-pointer">About</li>
        //         </ul>
          
        //         {/* Logo and Brand Name in the center */}
        //         <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        //           <img 
        //             src="/logo.png"
        //             alt="Soulful Bowl Logo"
        //             className="w-18 h-16 mb-1"
        //           />
        //           {/* <h1 className="text-xl font-semibold text-green-800">Soulful Bowl</h1> */}
        //         </div>
        //       </nav>
        //     );
        //   }