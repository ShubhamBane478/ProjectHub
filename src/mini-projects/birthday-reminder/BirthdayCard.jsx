import React, { useState } from "react";
import data from "./data";
import List from './List';
import './index.css'
import './BirthdayCard.css'

function BirthdayCard() {
    const [people, setPeople] = useState(data);


	function clearAllRecords() {
		setPeople([]);
	}
	return (
		<main>
			<section className="container">
				
				<h3>{[].length} birthdays today</h3>
				<List people={people} />
				<button onClick={clearAllRecords}>Clear All</button>
			</section>
		</main>
	);
}

export default BirthdayCard;
