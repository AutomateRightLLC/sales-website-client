'use client';

import {useState, useEffect, useCallback} from 'react';

const CircleDraw = () => {
  const [circle, setCircle] = useState<any>({});

  let count = 1;

  const DrawCircle = () => {

    if (count === 2) {
      const newCircle = {
        id: new Date(),
        cx: Math.random() * window.innerWidth,
        cy: Math.random() * window.innerHeight,
        r: (Math.floor(Math.random() * (5 - 1)) + 1) * 100,
        color: `rgba(255,255,255,0.2)`
      }
      setCircle(newCircle);
    }

    count = 2;

  };

  useEffect(() => {
    DrawCircle();
  }, []);

  return (
    <div className="circleCanvasWrap">
      <svg>
        <circle
          key={`cirlce-${circle.id}`}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          stroke={circle.color}
          strokeWidth="1"
          fill="none"
          className="draw"
          onAnimationEnd={DrawCircle}
        />
      </svg>
    </div>
  );
}

export default CircleDraw;
