import { ref, child, get } from 'firebase/database';
import { db } from '../firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './Guestbook.module.scss';

const GuestbookList = (props) => {
	const [list, setList] = useState([]);
	const readOne = () => {
		const dbRef = ref(db);
		get(child(dbRef, '/test'))
			.then((snapshot) => {
				if (snapshot.exists()) {
					console.log(Object.entries(snapshot.val()));
					setList(Object.entries(snapshot.val()));
					props.setConfirm(false);
				} else {
					console.log('No data available');
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	useEffect(() => {
		readOne();
	}, []);
	useEffect(() => {
		if (props.confirm) readOne();
	}, [props.confirm]);
	return (
		<ul className={styles.guest_list}>
			{list.map((value) => {
				return (
					<li key={value[0]}>
						<div className={styles.info}>
							<div className={styles.name}>{value[1].name}</div>
							<div className={styles.date}>{value[1].date}</div>
						</div>

						<div className={styles.cont}>{value[1].todo}</div>
					</li>
				);
			})}
		</ul>
	);
};
export default GuestbookList;
