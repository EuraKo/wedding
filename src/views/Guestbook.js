import { useState } from 'react';
import GuestbookList from './GuestbookList';
import { uid } from 'uid';
import { db } from '../firebase';
import { ref, set, push } from 'firebase/database';
import styles from './Guestbook.module.scss';

const GuestBook = () => {
	const [todo, setTodo] = useState('');
	const [name, setName] = useState('');
	const [confirm, setConfirm] = useState(false);
	const handleTodoChange = (e) => {
		setTodo(e.target.value);
	};
	const handleNameChange = (e) => {
		setName(e.target.value);
	};
	// Write
	const writeData = () => {
		const uuid = uid();
		if (!todo || !name) {
			return alert('값을 입력해주세요.');
		}
		if (window.confirm('정말 등록하시겠습니까?')) {
			const today = new Date();
			const dateFormat = `${today.getFullYear()}.${
				today.getMonth() + 1
			}.${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
			push(ref(db, 'test/'), {
				todo,
				name,
				uuid,
				date: dateFormat,
			});
			setTodo('');
			setName('');
			setConfirm(true);
		}
	};

	return (
		<>
			<section>
				<h2>축하해주세요</h2>

				<input
					type='text'
					className={styles.name_input}
					placeholder='이름'
					value={name}
					onChange={handleNameChange}
				/>
				<textarea
					name='guest'
					id='guest'
					className={styles.textarea}
					placeholder='축하 한마디'
					value={todo}
					onChange={handleTodoChange}
				/>

				<button className={styles.book_btn} onClick={writeData}>
					등록하기
				</button>
				<div>
					<GuestbookList confirm={confirm} setConfirm={setConfirm} />
				</div>
			</section>
		</>
	);
};

export default GuestBook;
