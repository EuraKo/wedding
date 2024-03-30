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
import Way from './views/Way';
import Phone from './views/Phone';

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
						<Way />
						<Money
							setType={setType}
							setModalOpen={setMoneyOpen}
							modalOpen={moneyOpen}
						/>
						<Phone />
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
