import css from "./Feedback.module.css";
const Feedback = ({ counter, feedbackTotal, feedbackPositive }) => {
  const { good, neutral, bad } = counter;
  return (
    <div className={css.feedbackContainer}>
      <p className={css.feedbackText}>Good:{good}</p>
      <p className={css.feedbackText}>Neutral:{neutral}</p>
      <p className={css.feedbackText}>Bad:{bad}</p>
      <p className={css.feedbackText}>Total: {feedbackTotal}</p>
      <p className={css.feedbackText}>Positive: {feedbackPositive}%</p>
    </div>
  );
};
export default Feedback;
