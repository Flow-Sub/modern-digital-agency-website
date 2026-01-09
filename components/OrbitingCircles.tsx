import React from 'react';
// ============ FIXED ORBITING CIRCLES COMPONENT ============
interface OrbitingCirclesProps {
  children: React.ReactNode;
  radius?: number;
  reverse?: boolean;
  duration?: number;
  iconSize?: number;
}

const OrbitingCircles: React.FC<OrbitingCirclesProps> = ({
  children,
  radius = 160,
  reverse = false,
  duration = 20,
  iconSize = 30,
}) => {
  const childArray = React.Children.toArray(children);
  const angleStep = 360 / childArray.length;

  return (
    <>
      {/* Orbit Path (static ring) */}
      <div
        className="absolute rounded-full border border-white/10"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Rotating Container */}
      <div
        className="absolute"
        style={{
          width: radius * 2,
          height: radius * 2,
          top: '50%',
          left: '50%',
          marginLeft: -radius,
          marginTop: -radius,
          animation: `spin ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        {childArray.map((child, index) => {
          const angle = angleStep * index;
          
          return (
            <div
              key={index}
              className="absolute"
              style={{
                width: iconSize + 16,
                height: iconSize + 16,
                left: '50%',
                top: '50%',
                marginLeft: -(iconSize + 16) / 2,
                marginTop: -(iconSize + 16) / 2,
                transform: `rotate(${angle}deg) translateX(${radius}px)`,
              }}
            >
              {/* Counter-rotate to keep icon upright */}
              <div
                className="w-full h-full flex items-center justify-center rounded-xl bg-black/60 backdrop-blur-md border border-white/20 shadow-lg hover:scale-110 transition-transform cursor-pointer"
                style={{
                  animation: `spin ${duration}s linear infinite`,
                  animationDirection: reverse ? 'normal' : 'reverse',
                }}
              >
                <div style={{ width: iconSize, height: iconSize }}>
                  {child}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};