import { StatsWrap } from "./Statistics.styled"

export const Statistics = ({ stats: { good, neutral, bad }, total, positivePercentage }) => {
        return (
            <StatsWrap>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
            </StatsWrap>
        )
}