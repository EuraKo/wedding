import main from '../imgs/main.webp';
import eu from '../imgs/face_main1.png';
import kyo from '../imgs/face_main2.png';
import style from './Banner.module.scss';

const Banner = (props) => {
	return (
		<section className={style.top}>
			<h1>We Invite You To Our Wedding</h1>
			<div className={style.banner_box}>
				<img
					src={main}
					alt=''
					className={style.bg_img}
					onLoad={(e) => {
						props.setImgLoading(props.imgLoading + 1);
					}}
				/>
				<img src={eu} alt='' className={`${style.girl} ${style.face}`} />
				<img src={kyo} alt='' className={`${style.boy} ${style.face}`} />
			</div>
		</section>
	);
};

export default Banner;
