import styles from './Gallery.module.scss';
import Slider from 'react-slick';
import slider_big_1 from '../imgs/slider/slider_big_1.jpg';
import slider_big_2 from '../imgs/slider/slider_big_2.jpg';
import slider_big_3 from '../imgs/slider/slider_big_3.jpg';
import slider_big_4 from '../imgs/slider/slider_big_4.jpg';
import slider_big_5 from '../imgs/slider/slider_big_5.jpg';
import slider_big_6 from '../imgs/slider/slider_big_6.jpg';
import slider_big_7 from '../imgs/slider/slider_big_7.jpg';
import slider_big_8 from '../imgs/slider/slider_big_8.jpg';
import slider_big_9 from '../imgs/slider/slider_big_9.jpg';
import { useEffect } from 'react';
import { useState } from 'react';

const GalleryModal = (props) => {
	const [visible, setVisible] = useState(props.modalOpen); // 애니메이션 지연 함수
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
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		cssEase: 'linear',
		arrows: false,
		initialSlide: props.selectImg,
	};
	return (
		<div
			className={`${styles.gallery_modal} ${
				visible ? styles.modal_open : styles.modal_close
			}`}>
			<div className={styles.modal_box}>
				<button
					className={styles.modal_cancle}
					onClick={(e) => {
						e.preventDefault();
						setVisible(false);
						setTimeout(() => {
							props.setModalOpen(false);
						}, 200);
					}}>
					닫기
				</button>
				<Slider {...settings}>
					{imgs.map((img) => {
						return (
							<div className={styles.slide_item}>
								<img src={img} alt='' />
							</div>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};
export default GalleryModal;
