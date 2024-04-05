import { useEffect, useRef } from 'react';

const MapNaverDefault = () => {
	const mapElement = useRef(null);
	const { naver } = window;

	useEffect(() => {
		if (!mapElement.current || !naver) return;

		// 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
		const location = new naver.maps.LatLng(37.560152, 126.839323);
		const mapOptions = {
			center: location,
			zoom: 17,
			zoomControl: false,
		};

		const map = new naver.maps.Map(mapElement.current, mapOptions);
		console.log(map.getCenter());

		new naver.maps.Marker({
			position: location,
			map,
		});
		// 맵좌표이상 -> 리사이즈시켜 맞추기
		setTimeout(() => {
			window.dispatchEvent(new Event('resize'));
		}, 3000);
	}, []);

	return (
		<>
			<div ref={mapElement} style={{ minHeight: '250px' }} />
		</>
	);
};

export default MapNaverDefault;
