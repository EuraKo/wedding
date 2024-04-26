import eu from '../imgs/face_main1.png';
import kyo from '../imgs/face_main2.png';
import style from './Banner.module.scss';

const Banner = (props) => {
	return (
		<section className={style.top}>
			<h1>We Invite You To Our Wedding</h1>
			<div className={style.banner_box}>
				<img src={props.main} alt='' className={style.bg_img} />
				<img src={eu} alt='' className={`${style.girl} ${style.face}`} />
				<img src={kyo} alt='' className={`${style.boy} ${style.face}`} />
			</div>
		</section>
	);
};

export default Banner;
