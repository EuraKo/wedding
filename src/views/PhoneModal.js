import face_gyo from '../imgs/face_kyo.png';
import face_eu from '../imgs/face_eu.png';
import styles from './Phone.module.scss';
import { useState } from 'react';
const phoneModal = (props) => {
	const list = {
		gyo: [
			{ name: '김영호', number: '01053703222' },
			{ name: '황영화', number: '01063753222' },
			{ name: '김교철', number: '01035752334' },
		],
		eu: [
			{ name: '고태원', number: '01068002627' },
			{ name: '김춘순', number: '01053032627' },
			{ name: '고유라', number: '01082228443' },
		],
	};

	return (
		<>
			<div className={styles.money_modal}>
				<button
					className={styles.modal_cancle}
					onClick={(e) => {
						e.preventDefault();
						props.setModalOpen(false);
					}}>
					닫기
				</button>
				<div className={styles.money_cont}>
					<h2>{props.type === 'gyo' ? '신랑' : '신부'}</h2>
					{list[props.type].map((list, idx) => {
						return (
							<div key={idx} className={styles.money_list}>
								<span>{list.name}</span>
								<a href={`tel:${list.number}`}>{list.number}</a>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default phoneModal;
