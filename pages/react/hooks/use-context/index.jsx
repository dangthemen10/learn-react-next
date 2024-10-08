import { ThemeContextProvider } from "@/components/StudyContext/ThemeContext"
import ThemeSwitch from "@/components/StudyContext/ThemeSwitch";


/**
 * 
 * Bước 1: Tạo Context
 * Bước 2: Sử dụng useContext
 * Bước 3: Bọc component con với Provider
 * 
 */

export default function Home() {
    return (
        <ThemeContextProvider>
            <div>
                <h1>Welcome to Theme Switcher</h1>
                <ThemeSwitch />
            </div>
        </ThemeContextProvider>
    )
}