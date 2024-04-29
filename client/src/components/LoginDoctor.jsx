import React from 'react'
import {Link} from 'react-router-dom'

function LoginDoctor() {
  return (
    <div>
      <div className=' flex h-screen w-screen items-center p-4 bg-[#16202a]'>
      {/* <body className="bg-zinc-900 text-white min-h-screen flex items-center justify-center"/> */}
            <div className="w-full max-w-lg p-8 space-y-6 rounded-lg shadow-lg text-white bg-[#16202a]">
                <h1 className="text-4xl font-bold">Hello Doctor !</h1>
                <p className="text-zinc-400"> Lorem ipsum dolor sit amet.</p>
                <div>
                    <label  htmlFor="email" className="block text-sm font-medium text-zinc-300">Email*</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="mail@website.com" onChange={(e) => setEmail(e.target.value)}  />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Password*</label>
                    <input type="password" name="password" id="password" className="mt-1 block w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-md shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Min. 8 character" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                    Login
                </button>
                <p className="text-xs text-zinc-400 text-center">Have't registered yet ? <Link className=' text-blue-500' to={"/register-doctor"}>click here to Register as Patient</Link></p>
            </div>
    </div>
    </div>
  )
}

export default LoginDoctor