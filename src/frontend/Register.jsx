import Link from "next/link"
const Register =() =>{
    return(
        <div className='flex space-x-3'>
            <Link href="/signup" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Sign Up
            </Link>
            <Link href="/login" className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              Login
            </Link>
        </div>
    )
}
export default Register;