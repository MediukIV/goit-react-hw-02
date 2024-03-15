function Feedback({ good, neutral, bad, totalFeedback, positiveStatistics }) {
    return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {positiveStatistics} %</li>
    </ul>
  )
}

export default Feedback
