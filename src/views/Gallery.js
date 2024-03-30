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
