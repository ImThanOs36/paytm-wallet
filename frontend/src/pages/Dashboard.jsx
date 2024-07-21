import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import Transactions from "../components/Transactions";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const [id, setID] = useState("");
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState("");
    const navigate = useNavigate()
    async function SendMoney(id, amount) {
        console.log("clicked");
        setStatus("Pending ...");
        try {
            const response = await axios.post("https://paytm-wallet-gilt.vercel.app/account/transfer", {
                to: id,
                amount,
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            console.log(response);
            setStatus(response.data.message);
        } catch (error) {
            console.error("Error sending money:", error);
            setStatus("Failed to send money");
        }
    }

    return (
        <div className="max-h-screen ">
            <Appbar />

            <div className="flex justify-between h-full">
                <div className="w-1/4 sticky border-gray-300 border-r-2">
                    <ul className="flex flex-col justify-around p-2 gap-4 items-center pt-8">
                        <li className="w-full">
                            <button className="p-2 text-lg w-full border-b-2 hover:scale-105">
                                Dashboard
                            </button>
                        </li>
                        <li className="w-full">
                            <button className="p-2 text-lg w-full border-b-2 hover:scale-105 " onClick={() => {
                                localStorage.removeItem('token')
                                navigate("/signin")


                            }}>
                                Logout
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="p-8 flex gap-2 justify-around w-full pb-20">
                    <div className="w-full max-w-sm flex flex-col justify-between">
                        <Users />
                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send Money</CardTitle>

                                </CardHeader>
                                <div className="text-center italic">
                                    <span>{status}</span>
                                </div>
                                <CardContent>
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        SendMoney(id, amount);
                                    }}>
                                        <div className="grid gap-4">
                                            <div className="grid gap-2">
                                                <label htmlFor="recipient">Recipient</label>
                                                <input
                                                    id="recipient"
                                                    placeholder="Enter recipient's account number"
                                                    value={id}
                                                    onChange={(e) => setID(e.target.value)}
                                                    className="p-2 border-2 rounded-md text-lg"
                                                />
                                            </div>
                                            <div className="grid gap-2">
                                                <label htmlFor="amount">Amount</label>
                                                <input
                                                    id="amount"
                                                    type="number"
                                                    placeholder="Enter amount"
                                                    value={amount}
                                                    onChange={(e) => setAmount(Number(e.target.value))}

                                                    className="p-2 border-2 rounded-md text-lg"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-green-500 text-white"
                                            >
                                                Initiate Transfer
                                            </button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Balance />
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    );
};