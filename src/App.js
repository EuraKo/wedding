import './App.css';
import Banner from './views/Banner';
import Calendar from './views/Calendar';
import MainBg from './views/MainBg';
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);
	return (
		<div className='App'>
			<MainBg loading={loading} />
			<main className={loading && 'loading'}>
				{loading ? (
					<div className='intro'>
						김교철 <div className='small'>그리고</div> 고유라
					</div>
				) : (
					<>
						<Banner />
						<Calendar />
					</>
				)}
			</main>
			{/* <header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
