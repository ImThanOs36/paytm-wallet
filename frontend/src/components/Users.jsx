import { useEffect, useState } from "react"
import Button from "./ui/Button"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Users = () => {
    // Replace with backend call
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://paytm-wallet-gilt.vercel.app/user/bulk?filter=" + filter,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        )
            .then(response => {
                setUsers(response.data.user)
            })
    }, [filter])
    console.log(localStorage.getItem("token"))

    return <>
        <div className="bg-white rounded-lg relative max-w-md ">




            <div className="font-bold mt-6 text-lg ">
                Search User 
            </div>
            <div className="my-2">
                <input onChange={(e) => {
                    setFilter(e.target.value)
                }} type="text" placeholder="Search users..." className="w-full px-2 py-1.5 rounded-lg border "></input>
            </div>
            <div className="w-full ">
                {users[0] ?
                    <div className=" flex flex-col  max-w-sm justify-between absolute -left-0 w-full p-2 rounded-lg bg-white border-2" >
                        {users.map(user => <User key={user._id} user={user} />)}
                    </div> : null}
            </div>
        </div>
    </>
}

function User({ user }) {
    const navigate = useNavigate();

    return <div className="flex justify-between  ">
        <div className="flex gap-3">
            <div className="rounded-full h-10 w-10 bg-slate-200 flex justify-center mt-1">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstname[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstname} {user.lastname}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <button className="bg-black text-white py-1 px-3 rounded-md" onClick={() => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname);
            }} >send </button>
        </div>
    </div>
}