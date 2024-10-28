import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
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
  return (
    <>
      <Description />
      <Options
        onClickFeedback={(feedbackType) => updateFeedback(feedbackType)}
      />
      <Feedback counter={feedback} />
    </>
  );
}

export default App;
