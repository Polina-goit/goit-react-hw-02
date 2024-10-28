const Feedback = ({ counter }) => {
  const { good, neutral, bad } = counter;
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
    </>
  );
};
export default Feedback;
