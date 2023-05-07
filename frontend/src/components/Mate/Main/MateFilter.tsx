import React, {useEffect, useState} from 'react';
import style from './MateFilter.module.css';
import {useRecoilValue} from "recoil";
import {userState, UserType} from '../../../recoil/user';
import {FilterObj} from "./MateList";

let userSelectLocation = {
    'si' : '',
    'gu' : [],
}

export default function MateFilter({handleLocationValue}: FilterObj) {
    const [isHideLocation, setIsHideLocation] = useState(false);
    const [userSelectSi, setUserSelectSi] = useState<string | null>(null);
    const userInfo = useRecoilValue<UserType[]>(userState);
    console.log(userInfo[0]);
    interface Gu {
        guName: string;
        isSelected: boolean;
    }

    interface Si {
        siName : string;
        isSelected: boolean;
        gu : Gu[];
    }

    interface FilterItem extends  Si {}

    const [filterItem, setFilterItem] = useState<FilterItem[]>([
        {
            'siName' : '서울',
            'isSelected' : false,
            'gu' : [
                {'guName' : '전체', 'isSelected' : false},
                {'guName' : '강남구', 'isSelected' : false},
                {'guName' : '강동구', 'isSelected' : false},
                {'guName' : '강북구', 'isSelected' : false},
                {'guName' : '강서구', 'isSelected' : false},
                {'guName' : '관악구', 'isSelected' : false},
                {'guName' : '광진구', 'isSelected' : false},
                {'guName' : '구로구', 'isSelected' : false},
                {'guName' : '금천구', 'isSelected' : false},
                {'guName' : '노원구', 'isSelected' : false},
                {'guName' : '도봉구', 'isSelected' : false},
                {'guName' : '동대문구', 'isSelected' : false},
                {'guName' : '동작구', 'isSelected' : false},
                {'guName' : '마포구', 'isSelected' : false},
                {'guName' : '서대문구', 'isSelected' : false},
                {'guName' : '서초구', 'isSelected' : false},
                {'guName' : '성동구', 'isSelected' : false},
                {'guName' : '성북구', 'isSelected' : false},
                {'guName' : '송파구', 'isSelected' : false},
                {'guName' : '양천구', 'isSelected' : false},
                {'guName' : '영등포구', 'isSelected' : false},
                {'guName' : '용산구', 'isSelected' : false},
                {'guName' : '은평구', 'isSelected' : false},
                {'guName' : '종로구', 'isSelected' : false},
                {'guName' : '중구', 'isSelected' : false},
                {'guName' : '중랑구', 'isSelected' : false}
            ],
        },
        {
            'siName' : '부산',
            'isSelected' : false,
            'gu' : [
                {'guName' : '전체', 'isSelected' : false},
                {'guName' : '강남구', 'isSelected' : false},
                {'guName' : '강동구', 'isSelected' : false},
            ],
        },
        {
            'siName' : '대구',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '인천',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '광주',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '대전',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '울산',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '세공',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '경기',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '강남',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '경북',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '충남',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '충북',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '전남',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '전북',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '강원',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName' : '제주',
            'isSelected' : false,
            'gu' : [],
        },
        {
            'siName': '전국',
            'isSelected': false,
            'gu': [],
        }
    ]);

    const handleShowFilter = () => {
        setIsHideLocation(!isHideLocation);
    }

    const handleSiClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const {textContent} = e.target as HTMLButtonElement;

        setFilterItem(prevState => {
            return prevState.map(obj => {
                if (obj.siName === textContent) {
                    return {...obj, isSelected: true};
                } else {
                    if(obj.isSelected) {
                        return  {...obj, isSelected: false};
                    }
                }
                return obj;
            });
        });

        userSelectLocation.si = textContent as string;
    }
    const handleGuClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const {textContent} = e.target as HTMLButtonElement;

        setFilterItem((prevState) => {
            return prevState.map(obj => {
                if(obj.isSelected) {
                    const gu = obj.gu.map((guItem) => {
                        if(guItem.guName === textContent) {
                            if(guItem.isSelected) {
                                guItem.isSelected = false;
                                // @ts-ignore
                                const findIndex = userSelectLocation.gu.indexOf(guItem.guName as string);
                                userSelectLocation.gu.splice(findIndex, 1);
                            } else {
                                guItem.isSelected = true;
                                // @ts-ignore
                                userSelectLocation.gu.push(guItem.guName as string);
                            }

                            return guItem;
                        } else {
                            return  guItem;
                        }
                    });

                    return {...obj, gu };
                } else {
                    return obj;
                }
            })
        })
    };

    useEffect(() => {
        setFilterItem(prevState => {
            return prevState.map(obj => {
                console.log(userInfo[0])
                if (obj.siName === userInfo[0].address1) {
                    console.log("hi???");
                    return {...obj, isSelected: true}
                } else {
                    return obj
                }
            })
        })
    }, [])

    return (
        <section className={style.mateFilterContainer}>
            <div className={style.mateFilterWrapper}>
                <div className={style.locationFilterLabel}>지역</div>
                <button className={style.locationFilterButton} onClick={handleShowFilter}>
                    지역을 선택하세요
                </button>
            </div>
            {
                isHideLocation ? <>
                    <div className={style.locationSettingContainer}>
                        <div className={style.locationListWrapper}>
                            {filterItem.map((item) => {
                                return (
                                    <div key={item.siName} className={`${style.locationArea} ${item.isSelected && style.locationAreaActivate}`} onClick={handleSiClick}>{item.siName}</div>
                                )
                            })}
                        </div>

                        <div className={style.locationDetailListWrapper}>
                            {
                                filterItem.map((item) => {
                                    return (
                                        item.isSelected && item.gu.map((guItem) => <div className={`${style.detailLocationArea} ${guItem.isSelected && style.detailLocationAreaActivate}`} onClick={handleGuClick}>{guItem.guName}</div>)
                                    )
                                })
                            }
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