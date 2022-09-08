import Head from 'next/head'
import { stringify } from 'postcss';
import { useSate, useState } from 'react'


export default function Home() {

  const [last_stand, setLastStand] = useState('Last Cookie Stand')

  function handleSubmit(e) {
    e.preventDefault();
    const formResponse = {
      "location": e.target.location.value,
      "minCustomers": parseInt(e.target.min_cust.value),
      "maxCustomers": parseInt(e.target.max_cust.value),
      "avgCookies": parseInt(e.target.avg_cookies.value)
    }
    setLastStand(JSON.stringify(formResponse))
    // setLastStand(`{"location":"${e.target.location.value}","minCustomers":${e.target.min_cust.value},"maxCustomers":${e.target.max_cust.value},"avgCookies":${e.target.avg_cookies.value}}`);
    e.target.reset();
  }

  return (
    <div className='bg-green-100'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CookieForm onSubmit={handleSubmit} />
        <CookieReport stand={last_stand} />
      </main>
      <Footer copyright="2022" />
    </div>
  );
}

function Header() {
  return (
    <header className='bg-green-500 text-4xl p-3.5'>
      <h1>Cookie Stand Admin</h1>
    </header>
  );
}

function Footer(props) {
  return (
    <footer className='bg-green-500 p-3.5'>
      <p>&copy;{props.copyright}</p>
    </footer>
  );
}

function CookieForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="w-1/2 min-w-max mx-auto my-3 bg-green-300 rounded">
      <h2 className='text-2xl p-3.5 text-center'>Create Cookie Stand</h2>
      <div className='flex'>
        <label htmlFor="location" className='ml-5 mr-2'>Location</label>
        <input type="text" placeholder='City Name' name="location" className='flex-auto mr-2 ml-1' required />
      </div>
      <div className='flex py-2'>
        <div className='flex-auto mx-2'>
          <label htmlFor="min_cust" className='block text-center'>Minimum Customers per Hour</label>
          <input type="number" name='min_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2'>
          <label htmlFor="max_cust" className='block text-center'>Maximum Customers per Hour</label>
          <input type="number" name='max_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2'>
          <label htmlFor="avg_cookies" className='block text-center'>Average Cookies per Sale</label>
          <input type="number" name='avg_cookies' className='block mx-auto' required />
        </div>
        <button type='submit' className='bg-green-600 p-2 mr-2 rounded-sm'>Create</button>
      </div>
    </form>
  );
}

function CookieReport(props) {
  return (
    <div>
      <h3 className='text-center m-4'>Report Table Coming Soon...</h3>
      <p className='text-center m-4'>{props.stand}</p>
    </div>
  );
}