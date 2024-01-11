import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Gallery.module.scss';
import slider_big_1 from '../imgs/slider/slider_big_1.jpeg';
import slider_big_2 from '../imgs/slider/slider_big_2.jpeg';
import slider_big_3 from '../imgs/slider/slider_big_3.jpeg';
import slider_big_4 from '../imgs/slider/slider_big_4.jpeg';
import slider_big_5 from '../imgs/slider/slider_big_5.jpeg';
import slider_big_6 from '../imgs/slider/slider_big_6.jpeg';
import slider_big_7 from '../imgs/slider/slider_big_7.jpeg';
import slider_big_8 from '../imgs/slider/slider_big_8.jpeg';
import slider_big_9 from '../imgs/slider/slider_big_9.jpeg';

const Gallery = () => {
	const imgs = [
		slider_big_1,
		slider_big_2,
		slider_big_3,
		slider_big_4,
		slider_big_5,
		slider_big_6,
		slider_big_7,
		slider_big_8,
		slider_big_9,
	];
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		// autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear',
		arrows: false,
	};

	return (
		<>
			<section>
				<h2>GALLERY</h2>
				<div className={styles.gallery_box}>
					<Slider {...settings}>
						{imgs.map((img) => {
							return (
								<div className={styles.slide_item}>
									<img src={img} alt='' onClick={(e) => {}} />
								</div>
							);
						})}
					</Slider>
				</div>
			</section>
		</>
	);
};

export default Gallery;
