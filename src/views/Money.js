import styles from './Money.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCopy } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fullFaHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Money = (props) => {
	const [selectOpen, setSelectOpen] = useState(false);
	const [selectOpen2, setSelectOpen2] = useState(false);

	const monyItem = (item) => {
		return (
			<div className={styles.money_item}>
				<div className={styles.text}>
					{item.name} | {item.number} ({item.bank})
				</div>
				<CopyToClipboard
					text={item.number}
					onCopy={() => {
						alert('계좌번호가 복사됐습니다.');
					}}>
					<FontAwesomeIcon icon={faCopy} />
				</CopyToClipboard>
			</div>
		);
	};
	return (
		<section>
			<h2>마음 전하 실 곳 </h2>
			<div className={styles.money_box}>
				<div className={styles.money_list}>
					<button
						className={styles.money_btn}
						onClick={() => setSelectOpen(!selectOpen)}>
						신랑 측 전하기
						{!selectOpen ? (
							<FontAwesomeIcon icon={faHeart} />
						) : (
							<FontAwesomeIcon icon={fullFaHeart} />
						)}
					</button>
					<div
						className={`${styles.list_box} ${selectOpen && styles.list_open}`}>
						{monyItem({
							name: '김영호',
							number: 31502451033865,
							bank: '농협',
						})}
						{monyItem({
							name: '김교철',
							number: 100038382427,
							bank: '토스',
						})}
					</div>
				</div>
				<div className={styles.money_list}>
					<button
						className={styles.money_btn}
						onClick={() => setSelectOpen2(!selectOpen2)}>
						신부 측 전하기
						{!selectOpen2 ? (
							<FontAwesomeIcon icon={faHeart} />
						) : (
							<FontAwesomeIcon icon={fullFaHeart} />
						)}
					</button>
					<div
						className={`${styles.list_box} ${selectOpen2 && styles.list_open}`}>
						{monyItem({ name: '고태원', number: 60442592106821, bank: '국민' })}
						{monyItem({ name: '고유라', number: 91094500071, bank: '국민' })}
					</div>
				</div>
			</div>
		</section>
	);
};
export default Money;
