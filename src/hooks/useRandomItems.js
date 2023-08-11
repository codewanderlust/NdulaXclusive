import { useEffect, useState } from 'react';

// Custom hook to get random items from an array
export function useRandomItems(array, count) {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    const getRandomItems = (arr, count) => {
      const shuffled = arr.slice();
      let i = arr.length;
      const min = i - count;
      while (i-- > min) {
        const index = Math.floor((i + 1) * Math.random());
        const temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    };

    if (array) {
      const randomSelectedItems = getRandomItems(array, count);
      setRandomItems(randomSelectedItems);
    }
  }, [array, count]);

  return randomItems;
}
