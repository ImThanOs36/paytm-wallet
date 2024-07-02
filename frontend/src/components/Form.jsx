import React from 'react'

function Form({ type }) {
    console.log(type)
    return (
        <form className='bg-red-600 p-2 flex flex-col gap-2'>

            <div className=''>


                {type === 'signup' ? <div className='flex flex-col'>

                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" />
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" />

                </div> : null}

            </div>
            <div className='flex flex-col'>

                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />

                <label htmlFor="pawword">Password</label>
                <input type="password" name="passoword" id="passoword" />

                <button type="button" onClick={() => {
                    console.log("Clicked !!")
                }} >Submit</button>

            </div>
        </form>
    )
}

export default Form