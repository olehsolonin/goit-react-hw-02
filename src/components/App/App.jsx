import { useState, useEffect } from 'react';
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const defaultSettings = {
	good: 0, neutral: 0, bad: 0 
};

export default function App() {

	const getCurrentData = () => {
		const savedData = localStorage.getItem("getData");
		return savedData !== null ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
	 };

	const [values, setValues] = useState(getCurrentData);

	function updateFeedback(feedbackType) {
			setValues(values => ({
			...values,
			  [feedbackType]: values[feedbackType] + 1,
			}));
		 }
	
	const totalFeedback = values.good + values.neutral + values.bad;

	const resetFeedback = () => {
		setValues({ good: 0, neutral: 0, bad: 0 });
		return localStorage.setItem("getData", JSON.stringify(defaultSettings))

	 };

	 const positiveFeedback =
    totalFeedback > 0
      ? Math.round((values.good / totalFeedback) * 100): 0;
		
	// useEffect(() => {
	// 		const savedValues = localStorage.getItem("getData");
	// 		if (savedValues) {
	// 		  setValues(JSON.parse(savedValues));
	// 		}
	// 		else{
	// 			setValues({ good: 0, neutral: 0, bad: 0 })
	// 		}
	// 	 }, []);

	  
	useEffect(() => {
			localStorage.setItem("getData", JSON.stringify(values));
		 }, [values]);





	return (
	  <div>
		 <Description 
		 title="Sip Happens Café"
		 text="Please leave your feedback about our service by selecting one of the options below."
		 />
		<Options 
		updateFeedback={updateFeedback} 
		totalFeedback={totalFeedback} 
		resetFeedback={resetFeedback} 
		/>

		{totalFeedback > 0 ? (
        <Feedback
          values={values}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />)

		: (<Notification />)
	
}

		</div>
	);
 }