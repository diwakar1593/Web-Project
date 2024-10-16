import { useEffect } from 'react';

function useTooltipPosition (showExplanation, showExplanationBtn, tooltipRef, btnRef)
{
  useEffect(() =>
  {
    if (showExplanation && tooltipRef.current)
    {
      const tooltipHeight = tooltipRef.current.clientHeight;
      tooltipRef.current.parentElement.style.marginTop = `${ tooltipHeight }px`;
      tooltipRef.current.style.marginTop = `-${ tooltipHeight / 2.5 }px`;
    }

    if (showExplanationBtn && btnRef.current)
    {
      const tooltipBtnHeight = btnRef.current.clientHeight;
      btnRef.current.parentElement.style.marginTop = `${ tooltipBtnHeight }px`;
      btnRef.current.style.marginTop = `-${ tooltipBtnHeight / 4.5 }px`;
    }
  }, [showExplanation, showExplanationBtn, tooltipRef, btnRef]);
}

export default useTooltipPosition;
