import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  )
}
