
export default function Nav(){
    return(
        <>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://img.freepik.com/free-vector/gradient-sd-ds-logo-template_52683-80305.jpg?w=740&t=st=1709792237~exp=1709792837~hmac=3d2fee959dcc31d7d45d46f653819a0b832374a875da61cafd3c94b0abae89c1" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MY Portofolio</span>
                </a>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                
            <a href="#" className="text-xl text-blue-600 dark:text-blue-500 hover:underline font-bold ">dafDev</a>
        </div>
            </div>
        </nav><nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-2xl px-3 py-3">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-extralight mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Project</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
    )
}

