import React, {useEffect, useRef} from 'react';

export const Map2D = ({map}) => {
  const canvasElt = useRef(null);
  useEffect(() => {
    const ctx = canvasElt.current.getContext('2d');
    const size = Math.sqrt(map.length);
    const width = 512 / (size - 1);
    let min = 1000, max = 1000;
    console.log('size draw', size, width)
    map.forEach((h, index) => {
      const x = index % size;
      const y = Math.floor(index / size);
      min = Math.min(min, h);
      max = Math.max(max, h);
      if(x < size - 1 && y < size - 1) {
        ctx.fillStyle = h < 0 ? `hsl(225, 50%, ${Math.round(50 + h / 20)}%)` : `hsl(100, 50%, ${Math.round(50 - h / 20)}%)`;
        ctx.fillRect(x * width, y * width, width, width);
      }
    });
    console.log('min max', min, max);
  }, [map]);
  return (<canvas ref={canvasElt} width={512} height={512}></canvas>);
}
