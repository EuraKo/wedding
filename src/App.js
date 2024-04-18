import './App.css';
import MainBg from './views/MainBg';
import Banner from './views/Banner';
import Calendar from './views/Calendar';
import Gallery from './views/Gallery';
import GalleryModal from './views/GalleryModal';
import PhoneModal from './views/PhoneModal';
import Ment from './views/Ment';
import Money from './views/Money';
import Maps from './views/Maps';
import Way from './views/Way';
import Reception from './views/Reception';
import Phone from './views/Phone';
import Guestbook from './views/Guestbook';
import Footer from './views/Footer';

import React, { useEffect, useState, Suspense } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState('');
	const [selectImg, setSelectImg] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const [phoneOpen, setPhoneOpen] = useState(false);
	const [type, setType] = useState('');
	useEffect(() => {
		function preloading(imageArray) {
			console.log(imageArray);
			imageArray.forEach((url) => {
				const image = new Image();
				image.src = url;
			});
		}

		preloading([
			'../imgs/flowers.png',
			'../imgs/leaves.png',
			'../imgs/face_main1.png',
		]);
	}, []);
	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setOpen('loading_main');
			}, 1000);
		} else {
			setOpen('loading_main_finish');
		}
	}, [loading]);
	useEffect(() => {
		if (open === 'loading_main') {
			setTimeout(() => {
				setLoading(false);
			}, 1500);
		}
	}, [open]);
	return (
		<div className='App'>
			<Suspense fallback={<div></div>}>
				<MainBg loading={loading} />
				{/* <LazyMainBg loading={loading} /> */}
				<main className={open}>
					<div className='intro'>
						김교철 <div className='small'>그리고</div> 고유라
					</div>
					<div className='contents'>
						<Banner />
						<section>
							<div>김교철 & 고유라</div>
							<div>2024.06.09 (일) 오전 11시</div>
							<div> 발산 더 베뉴지 2층 베뉴지홀</div>
						</section>
						<Ment />
						<Calendar />
						<Gallery
							setSelectImg={setSelectImg}
							setModalOpen={setModalOpen}
							modalOpen={modalOpen}
						/>
						<Way>
							<Maps />
						</Way>
						<Reception />
						<Money />
						<Phone
							setType={setType}
							setModalOpen={setPhoneOpen}
							modalOpen={phoneOpen}
						/>
						<Guestbook />

						<Footer />
					</div>
				</main>
				{modalOpen && (
					<GalleryModal
						selectImg={selectImg}
						setModalOpen={setModalOpen}
						modalOpen={modalOpen}
					/>
				)}
				{phoneOpen && (
					<PhoneModal
						type={type}
						setModalOpen={setPhoneOpen}
						modalOpen={phoneOpen}
					/>
				)}
			</Suspense>
		</div>
	);
}

export default App;
