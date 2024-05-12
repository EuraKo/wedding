import style from './Way.module.scss';
const Reception = () => {
	return (
		<section className={style.reception_box}>
			<div className={style.way_box}>
				<h2>사북 앞잔치</h2>
				<div className={style.caution}>
					서울에서 결혼식을 올릴 예정으로 <br />
					아래와 같이 앞잔치 자리를 마련했습니다.
				</div>
				<h3>주소</h3>

				<div>
					강원특별자치도 정선군 사북2길 16 <br />
					<b>사북 복지회관</b>
				</div>
				<h3>일시</h3>
				<div>2024.06.02 (일) 11시 30분 ~ 14시 30분</div>
			</div>
		</section>
	);
};
export default Reception;
