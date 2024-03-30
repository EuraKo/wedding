import face_gyo from '../imgs/face_kyo.png';
import face_eu from '../imgs/face_eu.png';
import styles from './Money.module.scss';
import { useState } from 'react';
const Money = (props) => {
	const moneyOpen = (peo) => {
		props.setModalOpen(true);
		props.setType(peo);
	};
	return (
		<section>
			<h2>마음 전하 실 곳 </h2>
			<div className={styles.money_box}>
				<button className={styles.money_btn} onClick={() => moneyOpen('gyo')}>
					<div>신랑 측 전하기</div>
					<img src={face_gyo} alt='' />
				</button>
				<button className={styles.money_btn} onClick={() => moneyOpen('eu')}>
					<div>신부 측 전하기</div>
					<img src={face_eu} alt='' />
				</button>
			</div>
		</section>
	);
};
export default Money;
