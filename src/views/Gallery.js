import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './Gallery.module.scss';
import GalleryModal from './GalleryModal';
import slider_big_1 from '../imgs/slider/slider_big_1.jpg';
import slider_big_2 from '../imgs/slider/slider_big_2.jpg';
import slider_big_3 from '../imgs/slider/slider_big_3.jpg';
import slider_big_4 from '../imgs/slider/slider_big_4.jpg';
import slider_big_5 from '../imgs/slider/slider_big_5.jpg';
import slider_big_6 from '../imgs/slider/slider_big_6.jpg';
import slider_big_7 from '../imgs/slider/slider_big_7.jpg';
import slider_big_8 from '../imgs/slider/slider_big_8.jpg';
import slider_big_9 from '../imgs/slider/slider_big_9.jpg';
import slider_big_10 from '../imgs/slider/slider_big_10.jpg';
import slider_big_11 from '../imgs/slider/slider_big_11.jpg';
import slider_big_12 from '../imgs/slider/slider_big_12.jpg';
import slider_big_13 from '../imgs/slider/slider_big_13.jpg';
import slider_big_14 from '../imgs/slider/slider_big_14.jpg';
import slider_big_15 from '../imgs/slider/slider_big_15.jpg';
import slider_big_16 from '../imgs/slider/slider_big_16.jpg';
import slider_big_17 from '../imgs/slider/slider_big_17.jpg';
import slider_big_18 from '../imgs/slider/slider_big_18.jpg';
import slider_big_19 from '../imgs/slider/slider_big_19.jpg';
import slider_big_20 from '../imgs/slider/slider_big_20.jpg';
import slider_big_21 from '../imgs/slider/slider_big_21.jpg';
import slider_big_22 from '../imgs/slider/slider_big_22.jpg';
import slider_big_23 from '../imgs/slider/slider_big_23.jpg';
import slider_big_24 from '../imgs/slider/slider_big_24.jpg';
import slider_big_25 from '../imgs/slider/slider_big_25.jpg';

const Gallery = (props) => {
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
		slider_big_10,
		slider_big_11,
		slider_big_12,
		slider_big_14,
		slider_big_15,
		slider_big_16,
		slider_big_17,
		slider_big_18,
		slider_big_19,
		slider_big_21,
		slider_big_23,
		slider_big_24,
		slider_big_25,
	];
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: false,
		// speed: 3000,
		// autoplaySpeed: 0,
		cssEase: 'linear',
		arrows: false,
	};

	return (
		<>
			<section style={{ marginBottom: 60 }}>
				<h2>GALLERY</h2>
				<div className={styles.gallery_box}>
					<Slider {...settings}>
						{imgs.map((img, idx) => {
							return (
								<div
									className={styles.slide_item}
									key={idx}
									onClick={() => {
										props.setModalOpen(true);
										props.setSelectImg(idx);
									}}>
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
