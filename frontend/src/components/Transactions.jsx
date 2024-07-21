import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Transactions() {

    const [transactions, setTransactions] = useState([])
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const Transactions = await axios.get("https://paytm-wallet-gilt.vercel.app/account/alltransaction", {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }).then(response => {
                setTransactions(response.data.transactions)
            })

        }
        fetchData()
    }, [refresh])
    console.log(transactions)


    const finalTransition = [...transactions].reverse()
    return (
        <div className=' border-2 rounded-lg min-w-96 min-h-96 flex flex-col justify-between p-4'>
            <div>
                <div className='text-center text-lg font-semibold'>
                    <h2>Recent Transactions</h2>
                </div>
                <div>



                    <div className='overflow-scroll overflow-x-hidden  scroll-m-0 max-h-80'>
                        {finalTransition.map((transaction, index) => (
                            <div key={index} className='p-2 border m-2'>
                                <p><strong>From:</strong> {transaction.sender}</p>
                                <p><strong>To:</strong> {transaction.receiver}</p>
                                <p><strong>Transaction:</strong> {transaction.transactions}</p>
                                <p><strong>Time:</strong> {new Date(transaction.at).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' })}</p>

                                <hr />
                            </div>
                        ))}
                    </div>


                </div>
            </div>
            <hr/>
            <div className='p-2'>
                <button className="w-full font-bold" onClick={() => {
                    setRefresh(!refresh)
                }}>
                    refresh
                </button>
            </div>
        </div>
    )
}




// function ReceiptIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
//             <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
//             <path d="M12 17.5v-11" />
//         </svg>
//     )
// }
// function SendIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="m22 2-7 20-4-9-9-4Z" />
//             <path d="M22 2 11 13" />
//         </svg>
//     )
// }

export default Transactions
