const Tooltip = ({ tooltipRef, explanation, loading }) => {
  return (
    <div
      ref={tooltipRef}
      role='tooltip'
      aria-describedby='highlightText'
      className={`absolute -top-5 left-0 p-3 text-xs bg-black text-white rounded-lg transform -translate-y-1/2 max-w-lg overflow-y-scroll scroll-content line-clamp-5 opacity-100 z-10 border border-white dark:bg-white dark:text-black`}>
      {loading ? 'loading...' : <p>{explanation}</p>}
    </div>
  );
};

export default Tooltip;
