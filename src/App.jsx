import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

function App() {
  const typeRewiews = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    return typeRewiews;
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedbackButton = () => setFeedback(typeRewiews);
  return (
    <>
      <Description />
      <Options
        onClickFeedback={(feedbackType) => updateFeedback(feedbackType)}
        resetFeedback={totalFeedback >= 1}
        resetButton={resetFeedbackButton}
      />
      {totalFeedback >= 1 && <Feedback counter={feedback} />}
      {totalFeedback < 1 && <Notification />}
    </>
  );
}

export default App;
