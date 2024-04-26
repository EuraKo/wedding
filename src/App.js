import './App.css';
import LoadingPage from './views/Loading';
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
	const [imgLoading, setImgLoading] = useState(0); // 이미지가 로드 개수
	const [loadingStart, setLoadingStart] = useState(false); // 이미지 모두 로드 후
	const [loading, setLoading] = useState(true); // 현재 꽃화면이 종료되면 false
	const [open, setOpen] = useState('');
	const [selectImg, setSelectImg] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const [phoneOpen, setPhoneOpen] = useState(false);
	const [type, setType] = useState('');

	// function preloading(imageArray) {
	// 	imageArray.forEach((url) => {
	// 		let image = new Image();
	// 		image.src = url;
	// 		image.onload = () => {
	// 			image = null;
	// 			console.log('aaa', url);
	// 		};
	// 	});
	// 	setImgLoading(true);
	// }

	// useEffect(() => {
	// 	preloading([
	// 		// '../imgs/flowers.png',
	// 		'../imgs/leaves.png',
	// 		'../imgs/face_main1.png',
	// 	]);
	// }, []);

	useEffect(() => {
		if (loadingStart) {
			if (loading) {
				setOpen('loading_main');
			} else {
				setOpen('loading_main_finish');
			}
		}
	}, [loadingStart, loading]);

	useEffect(() => {
		console.log('aa', imgLoading);
		if (imgLoading === 3) {
			setLoadingStart(true);
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [imgLoading]);

	return (
		<div className='App'>
			<Suspense fallback={<LoadingPage />}>
				{/* 꽃 나뭇잎 이미지 첫 로딩 다되고 화면 뜨게 하기 */}
				{!loadingStart && <LoadingPage />}
				<MainBg
					loadingStart={loadingStart}
					loading={loading}
					imgLoading={imgLoading}
					setImgLoading={setImgLoading}
				/>
				<main className={open}>
					<div className='intro'>
						김교철 <div className='small'>그리고</div> 고유라
					</div>
					<div className='contents'>
						<Banner setImgLoading={setImgLoading} imgLoading={imgLoading} />
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
