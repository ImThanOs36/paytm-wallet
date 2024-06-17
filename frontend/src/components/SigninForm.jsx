import { useState } from "react"
import { BottomWarning } from "./BottomWarning"
import Button  from "./ui/Button"
import { Heading } from "./Heading"
import { InputBox } from "./InputBox"
import { SubHeading } from "./SubHeading"
import { useNavigate } from "react-router-dom"
import axios from "axios"
function SigninForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="harkirat@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("https://paytm-wallet-64m2.onrender.com/user/signin",{
             username,
              password
          }, {
              headers: {
                  Authorization: "Bearer " + localStorage.getItem("token")
              }
          });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign In"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  )
}

export default SigninForm