import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import LoginModal from '@/components/modals/LoginModal'
import RegisterModal from '@/components/modals/RegisterModal'
//import Modal from '@/components/Modal'
export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <RegisterModal/>
    <LoginModal/>
    {/* <Modal actionLabel="submit" isOpen title="test modal"/> */}
    <Layout><Component {...pageProps} /></Layout>
    
    </>
   
  

)}
 