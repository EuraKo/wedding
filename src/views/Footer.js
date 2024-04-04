import styles from './Footer.module.scss';
import { useEffect } from 'react';
import { shareKakao } from '../utils/shareKakaoLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import kakao from '../imgs/kakao.png';

const Footer = () => {
	return (
		<footer>
			<div className={styles.link_box}>
				<button
					onClick={() =>
						shareKakao('https://wedding-invite-5c680.firebaseapp.com/')
					}>
					<img className={styles.logo} src={kakao} alt={'Kakao Logo'} />
				</button>
				<button>
					<CopyToClipboard
						text={'https://wedding-invite-5c680.firebaseapp.com/'}
						onCopy={() => {
							alert('청첩장 주소가 복사됐습니다.');
						}}>
						<FontAwesomeIcon icon={faLink} />
					</CopyToClipboard>
				</button>
			</div>
			<div>김교철, 고유라 드림</div>
		</footer>
	);
};

export default Footer;
