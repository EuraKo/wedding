import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
const Loading = () => {
	return (
		<div className={'text_loading'}>
			<div>
				<FontAwesomeIcon icon={faHeart} beatFade />
			</div>
			loading...
		</div>
	);
};
export default Loading;
