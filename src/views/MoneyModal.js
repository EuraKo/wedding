import face_gyo from '../imgs/face_kyo.png';
import face_eu from '../imgs/face_eu.png';
import styles from './Money.module.scss';
import { useState } from 'react';
const MoneyModal = (props) => {
	const list = {
		gyo: [
			{ name: '김영호', number: '111-111-1111', bank: '우리' },
			{ name: '김교철', number: '100038382427', bank: '토스' },
		],
		eu: [
			{ name: '고태원', number: '111-111-1111', bank: '우리' },
			{ name: '고유라', number: '91094500071', bank: '국민' },
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
					<h2>{props.type === 'gyo' ? '신랑' : '신부'} 측 마음 전하기</h2>
					{list[props.type].map((list, idx) => {
						return (
							<div key={idx} className={styles.money_list}>
								<div>
									예금주 : <b>{list.name}</b>
								</div>
								<div>
									계좌번호 : <b>{list.number} </b>({list.bank})
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default MoneyModal;
