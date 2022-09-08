import Head from 'next/head'


export default function Home() {

  function handleSubmit(e) {
    e.preventDefault()
    alert('hi')
  }

  return (
    <div className='bg-green-100'>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CookieForm onSubmit={handleSubmit} />
        <CookieReport />
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
    <form onSubmit={props.onSubmit} className="w-1/2 mx-auto my-3 bg-green-300">
      <h2 className='text-4xl p-3.5 text-center'>Create Cookie Stand</h2>
      <div className='flex'>
        <label htmlFor="location" className='m-1'>Location</label>
        <input type="text" placeholder='City Name' name="location" className='flex-auto mr-2 ml-1' required />
      </div>
      <div className='flex py-2 w-100%'>
        <div className='inline-block mx-2'>
          <label htmlFor="min-cust" className='block'>Minimum Customers per Hour</label>
          <input type="number" name='min-cust' className='block mx-auto' required />
        </div>
        <div className='inline-block mx-2'>
          <label htmlFor="max-cust" className='block'>Maximum Customers per Hour</label>
          <input type="number" name='max-cust' className='block mx-auto' required />
        </div>
        <div className='inline-block mx-2'>
          <label htmlFor="avg-cookies" className='block'>Average Cookies per Sale</label>
          <input type="number" name='avg-cookies' className='block mx-auto' required />
        </div>
        <button type='submit' className='bg-green-600 p-2'>Create</button>
      </div>
    </form>
  );
}

function CookieReport() {
  return (
    <div>
      <h3 className='text-center m-4'>Report Table Coming Soon</h3>
      <p className='text-center m-4'>Last Cookie Stand</p>
    </div>
  );
}