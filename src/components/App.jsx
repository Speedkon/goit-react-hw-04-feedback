import {Component} from "react";
import { Section } from "./Section/Section"
import { SectionWrap } from "./App.styled";
import { Notification } from "./Notification/Notification"
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions"
import { Statistics } from "./Statistics/Statistics"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (e) => {
    const value = (e.target.textContent).toLowerCase();
    
    this.setState(prevState =>{
      return{
        [value]: prevState[value] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state;
      return good + neutral + bad
  };

  countPositiveFeedbackPercentage = () => {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };


  render(){

    return (
      <SectionWrap>
        <Section title="Please, leave feedback"><FeedbackOptions
            options={Object.keys(this.state)} 
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              stats={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </SectionWrap>
    );
  };
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
// };
