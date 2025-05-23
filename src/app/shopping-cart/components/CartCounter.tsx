'use client';
import { useState } from "react";
export const CartCounter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <>
            <span className="text-9xl">{counter}</span>
            <div className="flex gap-2">
                <button onClick={() => setCounter(preState => preState+1)} className="flex items-center cursor-pointer justify-center p-2 rounded-xl bg-gray-900 text-white active:bg-gray-600 transition-all w-[100px] mr-2">
                +1
                </button>
                <button onClick={() => setCounter(preState => preState-1)} className="flex items-center cursor-pointer justify-center p-2 rounded-xl bg-gray-900 text-white active:bg-gray-600 transition-all w-[100px] mr-2">
                -1
                </button>
            </div>
        </>
    )
}
