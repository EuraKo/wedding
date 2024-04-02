import style from './Way.module.scss';
const Way = (props) => {
	return (
		<section>
			<h2>오시는 길</h2>
			{props.children}
			<div>
				<div className={style.way_box}>
					<h3>주소</h3>
					<div>
						서울시 강서구 강서로 388 <br />
						(구, 등촌동 678-14 베뉴지웨딩홀)
					</div>
					<h3>지하철</h3>
					<ul>
						<li>5호선 발산역 3번 출구 방향 1분 이내</li>
						<li>9호선 양천향교역 6번 출구 도보 10분 직진</li>
					</ul>
					<h3>버스</h3>
					<div>발산역 정류장 하차</div>
					{/* <ul>
						<li>
							지선버스
							<br />
							6630, 6632, 6642, 6645, 6648, 6657, 6712
						</li>
						<li>
							간선버스
							<br />
							601, 605, 652,654, 661
						</li>
						<li>
							공항버스 <br />
							6003
						</li>
						<li>
							일반버스 <br />
							60, 60-3, 88, 1002
						</li>
						<li>
							직행버스 <br />
							3000, 8000
						</li>
					</ul> */}
					<h3>주차</h3>
					<ul>
						<li>2시간 무료 주차</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Way;
