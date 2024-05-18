import React, { useState, useRef, useEffect } from 'react';

type TooltipPositionX = 'left' | 'center' | 'right';
type TooltipPositionY = 'bottom' | 'center' | 'top';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  positionX?: TooltipPositionX;
  positionY?: TooltipPositionY;
}

export default function Tooltip({ 
  children, 
  text,
  positionX = 'center',
  positionY = 'bottom'
}: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(true);
  const [classPosicao, setClassPosicao] = useState<string>('tooltip');
  
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function montarTooltip() {
      let posicao = 'tooltip';
  
      switch(positionY) {
        case 'bottom':
          posicao = posicao + '-bottom';
          break;
  
        case 'center':
          posicao = posicao + '-center';
          break;
  
        case 'top':
          posicao = posicao + '-top';
          break;
      }
  
      switch(positionX) {
        case 'left':
          posicao = posicao + '-left';
          break;
  
        case 'right':
          posicao = posicao + '-right';
          break;
      }
  
      setClassPosicao(posicao);
    }

    montarTooltip();
  }, [
    positionX,
    positionY
  ]);

  const showTooltip = () => {
    setVisible(true);
  };

  const hideTooltip = () => {
    setVisible(false);
  };

  return (
    <div
      className="tooltip-trigger"
      ref={triggerRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <div
          className={`tooltip-content ${ classPosicao }`}
          ref={ tooltipRef }
          style={{ display: visible ? 'inline-block' : 'none' }}
        >
          {text}
        </div>
    </div>
  );
};