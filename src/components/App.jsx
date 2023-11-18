import { useState} from 'react';
import { Section } from "./Section/Section"
import { SectionWrap } from "./App.styled";
import { Notification } from "./Notification/Notification"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const value = (e.target.textContent).toLowerCase();
    
    switch (value) {
      case "good":
        setGood(prevGood => prevGood + 1)
        break
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1)
        break
      case "bad":
        setBad(prevBad => prevBad + 1)
        break;
      
      default:
        break;
    };
  }

  const countTotalFeedback = () => {
      return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };
    return (
      <SectionWrap>
        <Section title="Please, leave feedback"><FeedbackOptions
            options={["Good", "Neutral", "Bad"]} 
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </SectionWrap>
    );
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// }
