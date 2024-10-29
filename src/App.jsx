import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import css from "./App.module.css";

function App() {
  const typeRewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return typeRewiews;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const resetFeedbackButton = () => setFeedback(typeRewiews);
  return (
    <section className={css.container}>
      <Description />
      <Options
        onClickFeedback={(feedbackType) => updateFeedback(feedbackType)}
        resetFeedback={totalFeedback >= 1}
        resetButton={resetFeedbackButton}
      />
      {totalFeedback >= 1 && (
        <Feedback
          counter={feedback}
          feedbackTotal={totalFeedback}
          feedbackPositive={positiveFeedback}
        />
      )}
      {totalFeedback < 1 && <Notification />}
    </section>
  );
}

export default App;
