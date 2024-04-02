import face_gyo from '../imgs/face_kyo.png';
import face_eu from '../imgs/face_eu.png';
import styles from './Phone.module.scss';
import { useState } from 'react';
const Phone = (props) => {
	const moneyOpen = (peo) => {
		props.setModalOpen(true);
		props.setType(peo);
	};
	return (
		<section>
			<h2>연락처 </h2>
			<div className={styles.money_box}>
				<button className={styles.money_btn} onClick={() => moneyOpen('gyo')}>
					<div>신랑</div>
					<img src={face_gyo} alt='' />
				</button>
				<button className={styles.money_btn} onClick={() => moneyOpen('eu')}>
					<div>신부</div>
					<img src={face_eu} alt='' />
				</button>
			</div>
		</section>
	);
};
export default Phone;
