export default function Feedback({values,
	totalFeedback,
	positiveFeedback,}) {

	return (
		<div>
			<ul>
				<li>Good:{values.good}</li>
				<li>Neutral:{values.neutral}</li>
				<li>Bad:{values.bad}</li>
				<li>Total:{totalFeedback}</li>
				<li>Positive:{positiveFeedback} %</li>
			</ul>
		</div>
	)
	
}