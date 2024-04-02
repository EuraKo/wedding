import thumnail from '../imgs/thumnail2.jpg';
const { Kakao } = window;

export const shareKakao = (route, title) => {
	// url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
	console.log('kakao', window);
	if (Kakao) {
		console.log('kakao', window.Kakao);
		console.log(Kakao.isInitialized());
		if (!Kakao.isInitialized()) {
			Kakao.init('732ec1f357e9a77fa8730cca4846c18c'); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
		}

		Kakao.Share.sendDefault({
			objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
			content: {
				title: '김교철 고유라 결혼합니다.', // 인자값으로 받은 title
				description: '우리결혼해요', // 인자값으로 받은 title
				imageUrl: '../imgs/thumnail2.jpg',
				link: {
					mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
					webUrl: route,
				},
			},
			buttons: [
				{
					title: 'title',
					link: {
						mobileWebUrl: route,
						webUrl: route,
					},
				},
			],
		});
	}
};
