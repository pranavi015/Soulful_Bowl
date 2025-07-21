import React from 'react';
import Link from 'next/link';

export default function Navbar(){
    return (   
    <nav className="flex justify-between items-center px-6 py-4 bg-bg-[#A8653D] shadow-md">
        <h1 className="text-2xl font-semibold text-white"><Link href="/">Soulful Bowl🍃</Link></h1>
        <ul className="flex space-x-6 text-white-700 font-medium">
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="/">Home</Link></li>          
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./recipes">Recipes</Link></li>    
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./articles">Articles</Link></li>
            <li className="text-white hover:text-green-600 cursor-pointer"><Link href="./videos">Videos</Link></li>
        </ul>
        
    </nav>
    )
}

