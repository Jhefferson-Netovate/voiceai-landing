import React from 'react';

/**
 * FLOATING ORBS - NETOVATE OU
 * =============================
 * Orbes flotantes estilo Scale.com
 * Añade ambiente futurista al fondo
 */

export default function FloatingOrbs({ count = 3 }) {
  const orbs = [
    {
      size: 'w-64 h-64',
      color: 'bg-purple-600/30',
      position: 'top-1/4 left-1/4',
      duration: '8s',
      delay: '0s'
    },
    {
      size: 'w-80 h-80',
      color: 'bg-blue-600/20',
      position: 'top-1/2 right-1/4',
      duration: '12s',
      delay: '2s'
    },
    {
      size: 'w-96 h-96',
      color: 'bg-cyan-600/20',
      position: 'bottom-1/4 left-1/3',
      duration: '10s',
      delay: '4s'
    }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.slice(0, count).map((orb, index) => (
        <div
          key={index}
          className={`absolute ${orb.size} ${orb.color} ${orb.position} rounded-full blur-3xl animate-float`}
          style={{
            animationDuration: orb.duration,
            animationDelay: orb.delay
          }}
        />
      ))}
    </div>
  );
}