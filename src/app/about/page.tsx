
import React from 'react';

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About PAIR</h1>
            <div className="prose max-w-none">
                <p className="text-lg mb-4">
                    Princeton AI Review (PAIR) is a new initiative at Princeton University designed to create a platform for students to share their research and projects with the world.
                </p>
                <p className="text-lg mb-4">
                    Our goal is to foster a community of innovation and collaboration, highlighting the diverse work being done in artificial intelligence across campus.
                </p>
            </div>
        </div>
    );
}
