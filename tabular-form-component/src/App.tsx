import React, { useRef, useState, useEffect } from 'react';

const VirtualizedList = ({ items, itemHeight, containerHeight }) => {
  const listRef = useRef(null);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        setScrollTop(listRef.current.scrollTop);
      }
    };
    const currentRef = listRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const startIndex = Math.floor(scrollTop / itemHeight);
  const visibleItemsCount = Math.ceil(containerHeight / itemHeight) + 2;
  const endIndex = Math.min(items.length, startIndex + visibleItemsCount);
  const visibleItems = items.slice(startIndex, endIndex);

  const containerStyle = {
    height: containerHeight,
    overflow: 'auto',
  };

  const innerListStyle = {
    height: items.length * itemHeight,
    position: 'relative',
  };

  return (
    <div style={containerStyle} ref={listRef}>
      <div style={innerListStyle}>
        {visibleItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              height: itemHeight,
              position: 'absolute',
              top: (startIndex + index) * itemHeight,
              width: '100%',
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};