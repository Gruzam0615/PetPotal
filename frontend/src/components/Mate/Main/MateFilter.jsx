import React, { useState } from 'react';
import style from './MateFilter.module.css';

export default function MateFilter() {
    const [isHideLocation, setIsHideLocation] = useState(false);


    const filterItem = [
        {
            'si' : '서울',
            'gu' : ['전체', '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
        },
        {
            'si' : '부산',
            'gu' : [],
        },
        {
            'si' : '대구',
            'gu' : [],
        },
        {
            'si' : '인천',
            'gu' : [],
        },
        {
            'si' : '광주',
            'gu' : [],
        },
        {
            'si' : '대전',
            'gu' : [],
        },
        {
            'si' : '울산',
            'gu' : [],
        },
        {
            'si' : '세공',
            'gu' : [],
        },
        {
            'si' : '경기',
            'gu' : [],
        },
        {
            'si' : '강남',
            'gu' : [],
        },
        {
            'si' : '경북',
            'gu' : [],
        },
        {
            'si' : '충남',
            'gu' : [],
        },
        {
            'si' : '충북',
            'gu' : [],
        },
        {
            'si' : '전남',
            'gu' : [],
        },
        {
            'si' : '전북',
            'gu' : [],
        },
        {
            'si' : '강원',
            'gu' : [],
        },
        {
            'si' : '제주',
            'gu' : [],
        },
        {
            'si' : '전국',
            'gu' : [],
        }
    ]

    const handleTest = () => {
        setIsHideLocation(!isHideLocation);
    }
    return (
        <section className={style.mateFilterContainer}>
            <div className={style.mateFilterWrapper}>
                <div className={style.locationFilterLabel}>지역</div>
                <button className={style.locationFilterButton} onClick={handleTest}>
                    지역을 선택하세요
                </button>
            </div>
            {
                isHideLocation ? <>
                    <div className={style.locationSettingContainer}>
                        <div className={style.locationListWrapper}>
                            {filterItem.map((item) => {
                                return (
                                    <div className={style.locationArea}>{item.si}</div>
                                )
                            })}
                            {/*<div className={`${style.locationArea} ${style.locationAreaActivate}`}>서울</div>*/}
                            {/*<div className={style.locationArea}>부산</div>*/}
                            {/*<div className={style.locationArea}>대구</div>*/}
                            {/*<div className={style.locationArea}>인천</div>*/}
                            {/*<div className={style.locationArea}>광주</div>*/}
                            {/*<div className={style.locationArea}>대전</div>*/}
                            {/*<div className={style.locationArea}>울산</div>*/}
                            {/*<div className={style.locationArea}>세공</div>*/}
                            {/*<div className={style.locationArea}>경기</div>*/}
                            {/*<div className={style.locationArea}>강남</div>*/}
                            {/*<div className={style.locationArea}>경북</div>*/}
                            {/*<div className={style.locationArea}>충남</div>*/}
                            {/*<div className={style.locationArea}>층븍</div>*/}
                            {/*<div className={style.locationArea}>전남</div>*/}
                            {/*<div className={style.locationArea}>전북</div>*/}
                            {/*<div className={style.locationArea}>강원</div>*/}
                            {/*<div className={style.locationArea}>제주</div>*/}
                            {/*<div className={style.locationArea}>전국</div>*/}
                        </div>

                        <div className={style.locationDetailListWrapper}>
                            <div className={style.detailLocationArea}>강남구</div>
                            <div className={style.detailLocationArea}>강동구</div>
                            <div className={style.detailLocationArea}>강북구</div>
                            <div className={style.detailLocationArea}>강서구</div>
                            <div className={style.detailLocationArea}>관악구</div>
                            <div className={style.detailLocationArea}>광진구</div>
                            <div className={style.detailLocationArea}>구로구</div>
                            <div className={style.detailLocationArea}>금천구</div>
                            <div className={style.detailLocationArea}>노원구</div>
                            <div className={style.detailLocationArea}>도봉구</div>
                            <div className={style.detailLocationArea}>동대문구</div>
                            <div className={style.detailLocationArea}>동작구</div>
                            <div className={style.detailLocationArea}>마포구</div>
                            <div className={style.detailLocationArea}>서대문구</div>
                            <div className={style.detailLocationArea}>서초구</div>
                            <div className={style.detailLocationArea}>성동구</div>
                            <div className={style.detailLocationArea}>성북구</div>
                            <div className={style.detailLocationArea}>송파구</div>
                            <div className={style.detailLocationArea}>양천구</div>
                            <div className={style.detailLocationArea}>영등포구</div>
                            <div className={style.detailLocationArea}>용산구</div>
                            <div className={style.detailLocationArea}>은평구</div>
                            <div className={style.detailLocationArea}>종로구</div>
                            <div className={style.detailLocationArea}>중구</div>
                            <div className={style.detailLocationArea}>중랑구</div>
                        </div>
                    </div></> : <></>
            }

            <div className={style.mateFilterWrapper}>
                <div className={style.locationFilterLabel}>종류</div>
                <button className={style.locationFilterButton}>
                    종류들을 선택하세요
                </button>
            </div>
            <div className={style.mateFilterButtonWrapper}>
                <button className={style.mateFilterButton}>검색</button>
                <button className={style.mateFilterButton}>초기화</button>
            </div>
        </section>
    );
}