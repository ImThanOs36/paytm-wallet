import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/Card'
import Button from './ui/Button'
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


    // const res = new Date(date).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' })
    const finalTransition = [...transactions].reverse()
    return (
        <div className=''>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>



                    <div className='overflow-scroll max-h-60'>
                        {finalTransition.map((transaction, index) => (
                            <div key={index}>
                                <p><strong>From:</strong> {transaction.sender}</p>
                                <p><strong>To:</strong> {transaction.receiver}</p>
                                <p><strong>Transaction:</strong> {transaction.transactions}</p>
                                <p><strong>Transaction:</strong> {new Date(transaction.at).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' })}</p>

                                <hr />
                            </div>
                        ))}
                    </div>

                    {/* <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <ReceiptIcon className="h-5 w-5 text-green-500" />
                                <div>
                                    <div className="font-medium">Received from John</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">May 15, 2023</div>
                                </div>
                            </div>
                            <div className="text-green-500 font-medium">+$50.00</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <SendIcon className="h-5 w-5 text-red-500" />
                                <div>
                                    <div className="font-medium">Sent to Jane</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">May 12, 2023</div>
                                </div>
                            </div>
                            <div className="text-red-500 font-medium">-$25.00</div>
                        </div>
                    </div> */}
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="w-full " onClick={() => {
                        setRefresh(!refresh)
                    }}>
                        View All Transactions
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
function ReceiptIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
            <path d="M12 17.5v-11" />
        </svg>
    )
}
function SendIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}

export default Transactions
