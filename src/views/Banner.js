import main from '../imgs/main.png';
import style from './Banner.module.scss';

const Banner = () => {
	return (
		<section className={style.top}>
			<h1>We Invite You To Our Wedding.</h1>
			<div className={style.banner_box}>
				<img src={main} alt='' />
			</div>
		</section>
	);
};

export default Banner;
