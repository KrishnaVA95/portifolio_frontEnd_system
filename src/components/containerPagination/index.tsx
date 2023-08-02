'use client'
import { useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Link from "next/link"

interface iPaginationProps{
    nextPage: string | null
    previousPage: string | null
}


export default function Pagination({nextPage, previousPage}: iPaginationProps){
    const [currentPage, setCurrentPage] =  useState<number>(1)
    const next = () =>{
        console.log(nextPage)
        setCurrentPage(currentPage + 1)
    }
    const back = () =>{
        setCurrentPage(currentPage - 1)
    }
    return(
        <div>

        {nextPage == null ? <></> 
        : <Link href={nextPage} onClick={() => next()}>
        <AiFillCaretRight size={50} style={{
                        color:  "#2ae9c9",
                        margin: "0",
                        cursor: "pointer"
        }}/>    
        </Link>}
        <span>{currentPage}</span>
        {previousPage == null ? <></> 
        : <Link href={previousPage} onClick={() => back()}>
        <AiFillCaretLeft size={50} style={{
                        color:  "#2ae9c9",
                        margin: "0",
                        cursor: "pointer"
        }}/>    
        </Link>}
    </div>
    )
}