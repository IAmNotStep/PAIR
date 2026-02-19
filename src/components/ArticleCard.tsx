
import React from 'react';
import Link from 'next/link';

interface ArticleCardProps {
    title: string;
    excerpt: string;
    category: string;
    author: string;
    className?: string;
    imageUrl?: string; // Placeholder for future image support
}

export default function ArticleCard({ title, excerpt, category, author, className = '' }: ArticleCardProps) {
    return (
        <div className={`flex flex-col group ${className}`}>
            <div className="bg-gray-100 aspect-video mb-4 w-full object-cover">
                {/* Placeholder for image */}
            </div>
            <div className="flex items-center space-x-2 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                    {category}
                </span>
            </div>
            <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-gray-700 transition-colors">
                <Link href="#">{title}</Link>
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {excerpt}
            </p>
            <div className="mt-auto">
                <span className="text-xs font-medium text-gray-900">By {author}</span>
            </div>
        </div>
    );
}
