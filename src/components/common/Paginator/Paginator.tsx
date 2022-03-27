import React, {useState} from "react";
import s from "./Paginator.module.css";

type PropsType = {
    onPageChanged: (p: number) => void
    pageSize: number
    totalItemsCount: number
    currentPage: number
    portionSize: number

}

export const Paginator = ({ pageSize, totalItemsCount, onPageChanged, currentPage, portionSize, ...props}: PropsType) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState<number>(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
            <div className={s.paginator}>
                {portionNumber > 1 &&
                    <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>←</button> }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                    .map(p => {
                    return (
                        <span
                            className={currentPage === p ? s.selectedPage + ' ' + s.page : s.page}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}
                        key={p}>{p}</span>
                    )
                })}
                {portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>→</button> }
            </div>
    )
}