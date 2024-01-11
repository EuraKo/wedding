import main from '../imgs/main.png';
import style from './Banner.module.scss';

const Banner = () => {
	return (
		<section className={style.top}>
			<h1>Together With Their Families</h1>
			<div className={style.banner_box}>
				<img src={main} alt='' />
			</div>
		</section>
	);
};

export default Banner;
