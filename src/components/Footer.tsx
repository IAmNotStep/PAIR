
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Princeton AI Review</h3>
                        <p className="text-gray-400 text-sm">
                            Fostering innovation and collaboration in artificial intelligence at Princeton University.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Sections</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/humor" className="hover:text-white transition-colors">Humor</Link></li>
                            <li><Link href="/technical" className="hover:text-white transition-colors">Technical</Link></li>
                            <li><Link href="/spotlights" className="hover:text-white transition-colors">Spotlights</Link></li>
                            <li><Link href="/opinion" className="hover:text-white transition-colors">Opinion</Link></li>
                            <li><Link href="/news" className="hover:text-white transition-colors">News</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} Princeton AI Review. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
