import '@/styles/globals.css'
import connectDB from '@/lib/dbConnect'


export default function App({ Component, pageProps }) {
  //connectDB();

  return (
      <Component {...pageProps} />
  )
}
