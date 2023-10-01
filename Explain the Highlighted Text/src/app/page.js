"use client";

import { useState, useRef, useCallback } from 'react';
import handleExplanation from './utils/handleExplanation';
import QueryForm from './QueryForm';
import TextHighlight from './TextHighlight';
import useTooltipPosition from './hooks/useTooltipPosition';

export default function Home ()
{
  const [showExplanation, setShowExplanation] = useState(false);
  const [showExplanationBtn, setShowExplanationBtn] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [textToExplain, setTextToExplain] = useState('');
  const [loading, setLoading] = useState(false);
  const tooltipRef = useRef(null);
  const btnRef = useRef(null);

  // Handle text change
  const handleChange = useCallback((e) =>
  {
    setTextToExplain(e.target.value);
    clearTooltips();
  }, []);

  // Clear all tooltips
  const clearTooltips = useCallback(() =>
  {
    setShowExplanation(false);
    setShowExplanationBtn(false);
  }, []);

  // UseEffect for setting tooltip position
  useTooltipPosition(showExplanation, showExplanationBtn, tooltipRef, btnRef);

  return (
    <main className="min-h-screen w-[90vw] max-w-2xl mx-auto flex-col grid place-content-center py-5" onMouseDown={ () => setShowExplanation(false) }>
      <h1 className="text-3xl">Highlight For Explanation</h1>

      <QueryForm handleChange={ handleChange } />

      <div onMouseUp={ () => setShowExplanationBtn(true) }>
        <h3 className="relative flex flex-col gap-5 mt-3 mb-10">
          <span id="highlightInstructions">Highlight your query below for explanation</span>
          <TextHighlight
            textToExplain={ textToExplain }
            showExplanationBtn={ showExplanationBtn }
            showExplanation={ showExplanation }
            explanation={ explanation }
            btnRef={ btnRef }
            tooltipRef={ tooltipRef }
            loading={ loading }
            handleExplanation={ () => handleExplanation(setTextToExplain, setShowExplanationBtn, setLoading, setShowExplanation, setExplanation) }
          />
        </h3>
      </div>
    </main>
  );
}
