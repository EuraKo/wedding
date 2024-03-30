import './App.css';
import Banner from './views/Banner';
import Calendar from './views/Calendar';
import Gallery from './views/Gallery';
import MainBg from './views/MainBg';
import GalleryModal from './views/GalleryModal';
import MoneyModal from './views/MoneyModal';
import Ment from './views/Ment';
import Money from './views/Money';
import Maps from './views/Maps';

import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState('');
	const [selectImg, setSelectImg] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);

	const [moneyOpen, setMoneyOpen] = useState(false);
	const [type, setType] = useState('');

	useEffect(() => {
		if (loading) {
			setOpen('loading_main');
		} else {
			setOpen('loading_main_finish');
		}
	}, [loading]);
	useEffect(() => {
		if (open === 'loading_main') {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	}, [open]);
	return (
		<div className='App'>
			<MainBg loading={loading} />
			<main className={open}>
				{loading ? (
					<div className='intro'>
						김교철 <div className='small'>그리고</div> 고유라
					</div>
				) : (
					<>
						<Banner />
						<section>
							<div>김교철 & 고유라</div>
							<div>2024.06.09 일 오전 11시 발산 더 베뉴지</div>
						</section>
						<Ment />
						<Calendar />
						<Gallery
							setSelectImg={setSelectImg}
							setModalOpen={setModalOpen}
							modalOpen={modalOpen}
						/>
						<Maps />
						<section>
							<h2>오시는 길</h2>
							<div>
								<div>
									지하철 Subway
									<ul>
										<li>5호선 발산역 3번 출구 방향 1분 이내</li>
										<li>9호선 양천향교역 6번 출구 도보 10분 직진 버스</li>
									</ul>
									Bus
									<div>발산역 정류장 하차</div>
									<ul>
										<li>지선버스 6630, 6632, 6642, 6645, 6648, 6657, 6712</li>
										<li>간선버스 601, 605, 652,654, 661</li>
										<li>공항버스 6003</li>
										<li>일반버스 60, 60-3, 88, 1002</li>
										<li>직행버스 3000, 8000</li>
									</ul>
								</div>
							</div>
						</section>
						<Money
							setType={setType}
							setModalOpen={setMoneyOpen}
							modalOpen={moneyOpen}
						/>
					</>
				)}
			</main>
			{modalOpen && (
				<GalleryModal
					selectImg={selectImg}
					setModalOpen={setModalOpen}
					modalOpen={modalOpen}
				/>
			)}

			{moneyOpen && (
				<MoneyModal
					type={type}
					setModalOpen={setMoneyOpen}
					modalOpen={moneyOpen}
				/>
			)}
		</div>
	);
}

export default App;
