import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(){
   
    //theme = 현재값 getter, setTheme = 바꿀 값 setter
    const { theme, setTheme } = useTheme()

    return(
        <>
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            
            className="inline-flex items-center
            
            bg-gray-100 border-0 py-1 px-3 focus:outline-none

            // 왜 호버가 안먹힐깡?
            hover: bg-blue-100
            hover: text-blue-500

            rounded text-base mt-4 md:mt-0">
                
                {/* light */}
                <div className="visible dark:invisible dark:h-0 dark: w-0 h-6 w-0">
                    <span class="material-symbols-outlined">
                water
                </span>
                </div>

                <div className="invisible dark:visible dark:h-6 dark: w-0 h-0 w-0">
                    <span class="material-symbols-outlined">
                dark_mode
                </span>
                </div>

                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-2 ml-2" viewBox="0 0 24 24">
                    {/* <path d="M5 12h14M12 5l7 7-7 7"></path> */}
                </svg>
            </button>
        </>
    )
}