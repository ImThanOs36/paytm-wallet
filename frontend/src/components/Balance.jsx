import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {


    const [balalce, setBalance] = useState("");

    useEffect(() => {
        axios.get("https://paytm-wallet-gilt.vercel.app/account/balance",
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        ).then(response => {
            setBalance(Math.round(response.data.balance))
        })

    }, [balalce])
    return <>
        <div className="flex flex-col items-start h-28 p-4 rounded-md border-2 w-full">
            <div className="font-bold text-lg">
                Your balance :
            </div>
            <div className="font-bold text-4xl">
                Rs {balalce}
            </div>
        </div>
    </>
}