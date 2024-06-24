import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState } from 'react';

let params = {
	good: 0,
	neutral: 0,
	bad: 0
}

export default function App() {
	return (
	  <div>
		 <Description 
		 title="Sip Happens Café"
		 text="Please leave your feedback about our service by selecting one of the options below."
		 />


	  </div>
	);
 }