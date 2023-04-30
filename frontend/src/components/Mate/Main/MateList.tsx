import style from './MateList.module.css';
import MateCardItem from './MateCardItem';
import MateFilter from './MateFilter';
import {useState} from "react";


export default function MateList() {


    return (
        <section className={style.mateWrapper}>
            <MateFilter />
            55개의 개시글
            <div className={style.cardList}>
                <MateCardItem desc='강아지 산책시켜주실분 구해요' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='2023-04-16' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
                <MateCardItem desc='hi' imgUrl='https://plus.unsplash.com/premium_photo-1667394181169-9f606c3b9a7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fCVFQSVCMCU5NSVFQyU5NSU4NCVFQyVBNyU4MHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' category='구함' time='5분' location='성북구' />
            </div>
        </section>
    );
}

