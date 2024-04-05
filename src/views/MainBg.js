import { useEffect, useState } from 'react';
import flower from '../imgs/flowers.png';
import leaves from '../imgs/leaves.png';
import styles from './MainBg.module.scss';
const MainBg = (props) => {
	const [loading, setLoading] = useState('');
	useEffect(() => {
		if (props.loading) {
			setTimeout(() => {
				setLoading('bg_loading');
			}, 100);
		} else {
			setLoading('bg_finish_loading');
		}
	}, [props.loading]);
	return (
		<div className={`${styles.intro}  ${styles[loading]}`}>
			<img
				src={leaves}
				className={`${styles.leaves_t_l_r} ${styles.front}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={flower}
				className={`${styles.flower_t_l} ${styles.front}`}
				// style={{ transform: `rotate(105deg) translateY(100%)` }}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={flower}
				className={`${styles.flower_b_l} ${styles.front}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={leaves}
				className={`${styles.leaves_b_r} ${styles.front}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={flower}
				className={`${styles.flower_b_r} ${styles.front}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={leaves}
				className={`${styles.leaves_t_l_b} ${styles.back}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
			<img
				src={flower}
				className={`${styles.flower_t_r} ${styles.back}`}
				alt=''
				decoding='async'
				loading='lazy'
			/>
		</div>
	);
};

export default MainBg;
