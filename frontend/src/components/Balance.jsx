import axios from "axios";
import { useEffect, useState } from "react";

export const Balance = () => {


    const [balalce, setBalance] = useState("");

    useEffect(() => {
        axios.get("https://paytm-wallet-64m2.onrender.com/account/balance",
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
        <div className="flex">
            <div className="font-bold text-lg">
                Your balance
            </div>
            <div className="font-semibold ml-4 text-lg">
                Rs {balalce}
            </div>
        </div>
    </>
}