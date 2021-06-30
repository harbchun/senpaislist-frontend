import { useState, useEffect, useRef } from 'react';

export default function useResize() {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const ref = useRef(null);
  
    useEffect(() => {
      const handleResize = () => {
        setWidth(ref.current.offsetWidth)
        setHeight(ref.current.offsetHeight)
      }
  
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }, [ref])
  
    return { ref, width, height }
}