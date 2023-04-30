import style from './MateCardItem.module.css';


type MateCardItemProps = {
    desc: string,
    imgUrl : string,
    category : string,
    time: string,
    location: string,
}

export default function MateCardItem({desc, imgUrl, category, time, location} : MateCardItemProps) {
    return (
        <div className={style.cardItem}>
            <figure>
                <img className={style.likeIcon} alt="좋아요"/>
            </figure>
            <figure className={style.cardImageFigure}>
                <img className={style.cardImage} alt="mate_image" src={imgUrl} />
            </figure>
            <div className={style.cardDescWrapper}>
                <div className={style.cardCategory}>
                    {category}
                </div>
                <div className={style.cardDesc}>
                    {desc}
                </div>
                <div className={style.cardLocation}>
                    {location}
                </div>
                <div className={style.cardDate}>
                    {time}
                </div>
            </div>
        </div>
    );
}

