import React from 'react';
import Tooltip from './Tooltip';

function TextHighlight({
  textToExplain,
  handleExplanation,
  showExplanationBtn,
  showExplanation,
  explanation,
  btnRef,
  tooltipRef,
  loading,
}) {
  return (
    <div className='mt-5 relative'>
      <div
        id='highlightText'
        tabIndex={0}
        role='textbox'
        aria-multiline='true'
        aria-labelledby='highlightInstructions'
        className={`cursor-text outline-none focus:ring focus:ring-opacity-50`}>
        {textToExplain}
      </div>
      {showExplanationBtn && (
        <>
          <span className='text-red-600 text-xs'>
            Note: Explaining would cause you 5 credits
          </span>
          <button
            ref={btnRef}
            className={`absolute -top-7 left-0 p-3 text-sm bg-black text-white rounded-lg transform -translate-y-1/2 opacity-100 z-10 border border-white dark:bg-white dark:text-black hover:bg-gray-200 transition-all duration-300`}
            onClick={handleExplanation}>
            Explain
          </button>
        </>
      )}
      {!showExplanationBtn && showExplanation && (
        <Tooltip
          tooltipRef={tooltipRef}
          explanation={explanation}
          loading={loading}
        />
      )}
    </div>
  );
}

export default TextHighlight;
