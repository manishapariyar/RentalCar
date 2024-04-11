import React, { useRef } from 'react';

const InfiniteHorizontalScroll = () => {
    const containerRef = useRef(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            // Append new content when reaching end of scroll
            const newContent = document.createElement('div');
            newContent.textContent = 'New Item'; // Replace with your content
            container.appendChild(newContent);
        }
    };

    return (
        <div
            className="overflow-x-auto whitespace-nowrap border border-gray-300 p-4"
            onScroll={handleScroll}
            ref={containerRef}
        >
            {/* Scrollable content */}
            <div className="inline-block">
                {/* Initial content */}
                <div className="inline-block px-4 py-2 bg-gray-200 rounded mr-4">Item 1</div>
                <div className="inline-block px-4 py-2 bg-gray-200 rounded mr-4">Item 2</div>
                <div className="inline-block px-4 py-2 bg-gray-200 rounded mr-4">Item 3</div>
                {/* Additional items will be dynamically added */}
            </div>
        </div>
    );
};

export default InfiniteHorizontalScroll;
