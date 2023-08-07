import { useState } from 'react';
import PropTypes from 'prop-types';
function TextExpander({
  collapsedNumWords = 10,
  expandButtonText = 'Show more',
  collapseButtonText = 'Show less',
  buttonColor = '#1f09cd',
  expanded = false,
  className,
  text,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? text.toString()
    : text?.split(' ').slice(0, collapsedNumWords).join(' ') + '...';

  const buttonStyle = {
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px',
    color: buttonColor,
  };

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}

export default TextExpander;

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  text: PropTypes.string,
};
