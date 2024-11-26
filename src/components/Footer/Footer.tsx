import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900 to-blue-900">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} MagicSwapper. All rights reserved.
                    </p>
                </div>
                <nav className="flex space-x-4">
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">Terms</Link>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">Docs</Link>
                    <Link href="#" className="text-sm text-gray-400 hover:text-white">Contact</Link>
                </nav>
            </div>
        </footer>
    )
}

export default Footer