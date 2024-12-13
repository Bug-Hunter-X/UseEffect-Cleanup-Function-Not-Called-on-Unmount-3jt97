```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // This effect runs only once after the component mounts
    console.log('Component mounted');
    return () => {
      // Cleanup function - This will run when component unmounts
      console.log('Component unmounting');
    };
  }, []); // Empty dependency array ensures this runs once

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```