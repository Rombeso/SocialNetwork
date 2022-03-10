import React from "react";
import styles from "./Paginator.module.css";

type PropsType = {
    onPageChanged: (p: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number

}

export const Paginator = ({ pageSize, totalUsersCount,onPageChanged, currentPage,...props}: PropsType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = (currentPage < 6 ? 1 : currentPage - 5); i <= currentPage + 5 && i < pagesCount; i++) {
        pages.push(i)
    }
    return (
            <div>
                {pages.map(p => {
                    return (
                        <span
                            className={currentPage === p ? styles.selectedPage + ' ' + styles.page : styles.page}
                            onClick={(e) => {
                                onPageChanged(p);
                            }}>{p}</span>
                    )
                })}
            </div>
    )
}