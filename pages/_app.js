import '@/styles/globals.css'
import SessionProvider from '@/hooks/SessionContext.jsx'

export default function App({ Component, pageProps }) {

  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
