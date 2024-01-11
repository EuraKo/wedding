import { useEffect, useState } from 'react';
import flower from '../imgs/flowers.png';
import leaves from '../imgs/leaves.png';
import styles from './MainBg.module.scss';
const MainBg = (props) => {
	const [loading, setLoading] = useState('');
	useEffect(() => {
		if (props.loading) {
			setLoading('bg_loading');
		} else {
			setLoading('bg_finish_loading');
		}
	}, [props.loading]);
	return (
		<div className={`${styles.intro} ${loading}`}>
			<img src={leaves} className={`${styles.leaves_t_l_r} front`} alt='' />
			<img src={flower} className={`${styles.flower_t_l} front`} alt='' />
			<img src={flower} className={`${styles.flower_b_l} front`} alt='' />
			<img src={leaves} className={`${styles.leaves_b_r} front`} alt='' />
			<img src={flower} className={`${styles.flower_b_r} front`} alt='' />
			<img src={leaves} className={`${styles.leaves_t_l_b} back`} alt='' />
			<img src={flower} className={`${styles.flower_t_r} back`} alt='' />
		</div>
	);
};

export default MainBg;
