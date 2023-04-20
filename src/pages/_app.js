import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-100 min-h-screen'>
        <Component {...pageProps} />
        <Analytics />
      </div>
    </ThemeProvider>
  )
}
