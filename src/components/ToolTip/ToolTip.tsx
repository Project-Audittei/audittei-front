import React, { useState, useRef } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  positionX?: '';
}

export default function ToolTip({ children, text }: TooltipProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const showTooltip = () => {
    if (triggerRef.current && tooltipRef.current) {
      // const triggerRect = triggerRef.current.getBoundingClientRect();
      // const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // let top = triggerRect.bottom + 20;
      // let left = triggerRect.left + 20;

      // if (top + tooltipRect.height > window.innerHeight) {
      //   top = triggerRect.top - tooltipRect.height + 20;
      // }

      // if (left + tooltipRect.width > window.innerWidth) {
      //   left = window.innerWidth - tooltipRect.width + 20;
      // }

      // setPosition({ top, left });
      setVisible(true);
    }
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
          className="tooltip-content tooltip-left"
          ref={ tooltipRef }
          style={{ display: visible ? 'inline-block' : 'none' }}
        >
          {text}
        </div>
    </div>
  );
};