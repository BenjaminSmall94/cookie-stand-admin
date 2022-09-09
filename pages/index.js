import Head from 'next/head'
import Header from '../components/Header'
import CookieForm from '../components/CookieForm';
import CookieReport from '../components/CookieReport';
import { useSate, useState } from 'react'


export default function Home() {

  const [stands, setLastStand] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const standData = {
      id: stands.length + 1,
      location: e.target.location.value,
      minCustomers: parseInt(e.target.min_cust.value),
      maxCustomers: parseInt(e.target.max_cust.value),
      avgCookies: parseInt(e.target.avg_cookies.value)
    }
    setLastStand([...stands, standData])
    e.target.reset();
  }

  return (
    <div className='bg-green-100 min-w-max'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CookieForm onSubmit={handleSubmit} />
        <CookieReport stands={stands} />
      </main>
      <Footer storeCount={stands.length} />
    </div>
  );
}

function Footer(props) {
  return (
    <footer className='bg-green-500 p-3.5'>
      <p>{props.storeCount} Location World Wide</p>
    </footer>
  );
}
