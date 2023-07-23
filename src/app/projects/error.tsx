"use client"

import ContainerError from "@/components/error";
import { useEffect } from "react";

export interface IErrorProps{
    error?: Error;
    reset: () => void;
}


export default function Error({error, reset}: IErrorProps){
    useEffect(() =>{
        console.error('Error:', error)
    }, [error])

    return (
        <div>
            <ContainerError reset={reset}/>
        </div>
    )
}