function CookieForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="w-1/2 min-w-max mx-auto my-3 bg-green-400 rounded">
      <h2 className='text-2xl p-3.5 text-center'>Create Cookie Stand</h2>
      <div className='flex'>
        <label htmlFor="location" className='ml-5 mr-2'>Location</label>
        <input type="text" placeholder='City Name' name="location" className='flex-auto mr-2 ml-1' required />
      </div>
      <div className='flex py-2'>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="min_cust" className='block text-center'>Minimum Customers per Hour</label>
          <input type="number" name='min_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="max_cust" className='block text-center'>Maximum Customers per Hour</label>
          <input type="number" name='max_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="avg_cookies" className='block text-center'>Average Cookies per Sale</label>
          <input type="number" name='avg_cookies' className='block mx-auto' required />
        </div>
        <button type='submit' className='bg-green-600 p-2 mr-2 rounded-sm'>Create</button>
      </div>
    </form>
  );
}

export default CookieForm;