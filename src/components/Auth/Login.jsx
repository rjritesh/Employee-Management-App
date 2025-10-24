import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = () => {
    console.log("email is ", email);
    console.log("password is ", password);
    setEmail("");
    setPassword("")
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className="border-2 rounded-lg border-indigo-500 p-10 w-full max-w-sm">
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            required
            value={email}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <input
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition" onClick={submitHandler}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login