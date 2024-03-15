import { useState, useEffect } from "react";
import './App.css'
import Description from './components/Description/Description'
import Feedback from './components/Feedback/Feedback'
import Options from './components/Options/Options'
import Notification from './components/Notification/Notification';

function App() {
 const [clicks, setClicks] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("saved-clicks"));
    return savedClicks ? savedClicks : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      return setClicks({ good: 0, neutral: 0, bad: 0 });
    }

    setClicks({ ...clicks, [feedbackType]: clicks[feedbackType] + 1 });
  };

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);

  const positiveStatistics = Math.round(
    ((clicks.good + clicks.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
        good={clicks.good}
        neutral={clicks.neutral}
        bad={clicks.bad}
        totalFeedback={totalFeedback}
        positiveStatistics={positiveStatistics}
        />
      ) : (
        <Notification />
      )}
    </>
  )
}

export default App
