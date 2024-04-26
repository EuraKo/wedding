import { useEffect, useState } from 'react';
import flower from '../imgs/flowers.webp';
import leaves from '../imgs/leaves.webp';
import styles from './MainBg.module.scss';
const MainBg = (props) => {
	const [loading, setLoading] = useState('');

	useEffect(() => {
		if (props.loadingStart) {
			if (props.loading) {
				setLoading('bg_loading');
			} else {
				setLoading('bg_finish_loading');
			}
		}
	}, [props.loadingStart, props.loading]);

	return (
		<div className={`${styles.intro}  ${styles[loading]}`}>
			<img
				src={leaves}
				className={`${styles.leaves_t_l_r} ${styles.front}`}
				alt=''
				onLoad={(e) => {
					props.setImgLoading(props.imgLoading + 1);
				}}
			/>
			<img
				src={flower}
				className={`${styles.flower_t_l} ${styles.front}`}
				// style={{ transform: `rotate(105deg) translateY(100%)` }}
				alt=''
				onLoad={(e) => {
					console.log('aa', e);
					props.setImgLoading(props.imgLoading + 1);
				}}
			/>
			<img
				src={flower}
				className={`${styles.flower_b_l} ${styles.front}`}
				alt=''
			/>
			<img
				src={leaves}
				className={`${styles.leaves_b_r} ${styles.front}`}
				alt=''
			/>
			<img
				src={flower}
				className={`${styles.flower_b_r} ${styles.front}`}
				alt=''
			/>
			<img
				src={leaves}
				className={`${styles.leaves_t_l_b} ${styles.back}`}
				alt=''
			/>
			<img
				src={flower}
				className={`${styles.flower_t_r} ${styles.back}`}
				alt=''
			/>
		</div>
	);
};

export default MainBg;
