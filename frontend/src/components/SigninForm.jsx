import React from 'react'
import { Heading } from '../components/Heading'
import { SubHeading } from '../components/SubHeading'
import { InputBox } from '../components/InputBox'
import { BottomWarning } from '../components/BottomWarning'
import { Button } from '../components/Button'
function SigninForm() {
  return (
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <SubHeading label={"Enter your credentials to access your account"} />
            <InputBox placeholder="harkirat@gmail.com" label={"Email"} />
            <InputBox placeholder="123456" label={"Password"} />
            <div className="pt-4">
              <Button label={"Sign in"} />
            </div>
            <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
          </div>
  )
}

export default SigninForm