import Link from 'next/link'
import React from 'react'

const FooterLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Swap', href: '#swap' },
    { name: 'Twitter', href: 'https://twitter.com' },
    { name: 'Docs', href: '#' },
    { name: 'Contact', href: '#' },
];

const Footer = () => {
    return (
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-transparent">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-md text-primary">
                        © {new Date().getFullYear()} MagicSwapper. All rights reserved.
                    </p>
                </div>
                <nav className="flex space-x-4">
                    {FooterLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="text-md text-primary hover:text-secondary-foreground">
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </footer>
    )
}

export default Footer