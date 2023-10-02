import ExplanationRequest from "../axios/explanationRequest";

const handleExplanation = async (setTextToExplain, setShowExplanationBtn, setLoading, setShowExplanation, setExplanation) =>
{
  const selectedText = window.getSelection().toString();

  // Function to handle explanation logic
  const handleExplanationLogic = async (text) =>
  {
    if (text)
    {
      setTextToExplain(text);
      setShowExplanationBtn(false);
      setLoading(true);
      setShowExplanation(true);

      try
      {
        const explanation = await ExplanationRequest(text);
        setExplanation(`${ text }: ${ explanation }`);
      } catch (error)
      {
        console.error('Error:', error);
        setExplanation(null);
      } finally
      {
        setLoading(false);
      }
    }
  };

  // Check if there's selected text from touch events
  if (!selectedText)
  {
    // using touch events
    const touchSelection = document.getSelection();
    if (touchSelection)
    {
      const range = touchSelection.getRangeAt(0);
      handleExplanationLogic(range.toString());
    }
  } else
  {
    // Use the selected text from mouse events
    handleExplanationLogic(selectedText);
  }
};

export default handleExplanation;
