const Feedback = ({ counter, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = counter;
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {feedbackTotal}</p>
      <p>Positive: {feedbackPositive}%</p>
    </>
  );
};
export default Feedback;
