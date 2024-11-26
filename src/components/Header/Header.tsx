import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-800 to-blue-800">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                    MagicSwapper
                </Link>
                <nav className="flex space-x-4">
                    <Link href="#swap" className="text-gray-300 hover:text-white">Swap</Link>
                    <Link href="#features" className="text-gray-300 hover:text-white">Features</Link>
                    <Link href="#how-it-works" className="text-gray-300 hover:text-white">How It Works</Link>
                    <Link href="#" className="text-gray-300 hover:text-white">Docs</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header