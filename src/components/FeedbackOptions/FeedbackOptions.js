import { ButtonsWrap, Button } from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
<ButtonsWrap>
{options.map(option => {
        return (<Button onClick={onLeaveFeedback} key={option}>{option}</Button>)
    })
}
</ButtonsWrap>
    )
}