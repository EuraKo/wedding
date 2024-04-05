import { ref, child, get, query, limitToLast } from 'firebase/database';
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
					const dataArr = Object.values(snapshot.val());
					// 최신순 정렬
					const reverse = [];
					for (let i = dataArr.length - 1; i >= 0; i--) {
						reverse.push(dataArr[i]);
					}

					setList(reverse);
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
		if (props.confirm) readOne();
		const recentPostsRef = query(ref(db, 'test'), limitToLast(2));
		console.log(recentPostsRef);
		return readOne();
	}, [props.confirm]);
	return (
		<ul className={styles.guest_list}>
			{list.map((value) => {
				return (
					<li key={value.uuid}>
						<div className={styles.info}>
							<div className={styles.name}>{value.name}</div>
							<div className={styles.date}>{value.date}</div>
						</div>

						<div className={styles.cont}>{value.todo}</div>
					</li>
				);
			})}
		</ul>
	);
};
export default GuestbookList;
