function CookieForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="w-3/4 min-w-max mx-auto my-3 bg-green-200 rounded">
      <div className='flex py-3'>
        <div className='w-2/3'>
          <label htmlFor="location" className='ml-5 mr-2 p-0.5 block text-center font-semibold'>ADD LOCATION</label>
          <div className='flex justify-center'>
            <input type="text" placeholder='City Name' name="location" className='w-11/12 mx-2 p-0.5 block' required />
          </div>
        </div>
        <div className='flex justify-center items-end w-1/3'>
          <button type='submit' className='bg-green-600 w-5/6 p-1 h-max rounded-sm'>Create</button>
        </div>
      </div>
      <div className='flex py-2'>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="min_cust" className='block text-center font-semibold'>MINUMUM CUSTOMERS PER HOUR</label>
          <input type="number" name='min_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="max_cust" className='block text-center font-semibold'>MAXIMUM CUSTOMERS PER HOUR</label>
          <input type="number" name='max_cust' className='block mx-auto' required />
        </div>
        <div className='flex-auto mx-2 p-1.5 bg-green-200 rounded'>
          <label htmlFor="avg_cookies" className='block text-center font-semibold'>AVERAGE COOKIES PER SALE</label>
          <input type="number" step='0.1' name='avg_cookies' className='block mx-auto' required />
        </div>
      </div>
    </form>
  );
}

export default CookieForm;