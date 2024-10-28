const Options = ({ onClickFeedback }) => {
  return (
    <ul>
      <li>
        <button onClick={() => onClickFeedback("good")}>Good</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback("neutral")}>Neutral</button>
      </li>
      <li>
        <button onClick={() => onClickFeedback("bad")}>Bad</button>
      </li>
    </ul>
  );
};
export default Options;
