import Link from 'next/link'
import DarkModeToggleButton from './darkmode-toggle-button'

export default function Header(){
    return(
        <>
            <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}

                <div className="flex flex-col">
                        <span className="ml-3">Service Designer by Day</span>
                        <span className="ml-3">Coding Artist by Night</span>
                    </div>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                
                <Link href="/">
                    <a className="text-sm mr-5 hover:text-gray-900">Works</a>
                </Link>

                {/* 링크 걸. 해당하는 부분만 바꾸게 하는 Link 기능 */}
                <Link href="/projects">
                    <a className="text-sm mr-5 hover:text-gray-900">Blog</a>
                </Link>
                
                <a className="text-sm mr-5 hover:text-gray-900">Contact</a>
                </nav>
                
                {/* 버튼 */}
                {/* <DarkModeToggleButton/> */}
            </div>
            </header>
        </>
    )
}