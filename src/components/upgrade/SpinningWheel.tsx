
import React from 'react';
import { cn } from '@/lib/utils';

interface SpinningWheelProps {
  successPercentage: number;
  rotationDegree: number;
  isSpinning: boolean;
  result: 'success' | 'failure' | null;
  wheelRef: React.RefObject<HTMLDivElement>;
}

const SpinningWheel: React.FC<SpinningWheelProps> = ({
  successPercentage,
  rotationDegree,
  isSpinning,
  result,
  wheelRef
}) => {
  return (
    <div className="relative mb-8">
      <div className="w-64 h-64 mx-auto relative">
        {/* Круг для игры */}
        <div className="w-full h-full rounded-full overflow-hidden relative">
          {/* Фон круга - градиент от зеленого к красному */}
          <div 
            className="w-full h-full absolute" 
            style={{
              background: `conic-gradient(#22c55e 0% ${successPercentage}%, #ef4444 ${successPercentage}% 100%)`
            }}
          ></div>
          
          {/* Внутренний круг (для эстетики) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-card shadow-inner flex items-center justify-center">
            <span className="text-white font-bold text-2xl">{successPercentage}%</span>
          </div>
        </div>
        
        {/* Стрелка индикатора */}
        <div 
          ref={wheelRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1/2 origin-bottom"
          style={{ 
            transform: `translateX(-50%) rotate(${rotationDegree}deg)`,
            transition: isSpinning ? 'transform 5s cubic-bezier(0.32, 0.94, 0.6, 1)' : 'none'
          }}
        >
          <div className="w-4 h-4 bg-white rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
          <div className="w-1 h-full bg-white absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
      
      {result && !isSpinning && (
        <div className={cn(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-6 py-3 rounded-lg animate-fade-in z-10",
          result === 'success' ? "bg-green-500/80" : "bg-red-500/80"
        )}>
          <p className="text-white font-bold text-lg">
            {result === 'success' ? 'Успешно!' : 'Неудача!'}
          </p>
        </div>
      )}
    </div>
  );
};

export default SpinningWheel;
