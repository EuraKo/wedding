import styles from './Calendar.module.scss';
const Calendar = () => {
	const days = [];
	for (let day = 1; day <= 30; day++) {
		days.push(day);
	}
	return (
		<section className={styles.calendar_box}>
			<h2>THE WEDDING DAY</h2>
			<div className={styles.calendar_month}>
				<span>4</span>
				<span>5</span>
				<span>6</span>
				<span>7</span>
				<span>8</span>
			</div>
			<div className={styles.calendar_area}>
				{[0, 0, 0, 0, 0, 0].map((blank, idx) => {
					return <div className={styles.day} key={idx}></div>;
				})}

				{days.map((day) => {
					if (day === 9) {
						return (
							<div className={`${styles.day} ${styles.dDay}`} key={day}>
								{day}
							</div>
						);
					}
					return <div className={styles.day}>{day}</div>;
				})}
			</div>
		</section>
	);
};

export default Calendar;
