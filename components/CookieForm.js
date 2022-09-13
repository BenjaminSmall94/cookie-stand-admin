function CookieForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="w-3/4 min-w-max mx-auto my-3 bg-green-200 border-2 border-green-500 rounded">
      <div className='flex py-3'>
        <div className='w-2/3'>
          <label htmlFor="location" className='ml-5 mr-2 p-0.5 block text-center font-semibold text-sm'>ADD LOCATION</label>
          <div className='flex justify-center'>
            <input type="text" placeholder='Cookie Stand Location' name="location" className='w-11/12 mx-2 p-0.5 block text-sm' required />
          </div>
        </div>
        <div className='flex justify-center items-end w-1/3'>
          <button type='submit' className='bg-green-600 w-5/6 p-1 h-max rounded text-sm'>CREATE STAND</button>
        </div>
      </div>
      <div className='flex py-4'>
        <div className='w-1/3 mx-2 bg-green-200 rounded'>
          <label htmlFor="min_cust" className='block text-center font-semibold text-xs my-1'>MINUMUM CUSTOMERS PER HOUR</label>
          <input type="number" placeholder="0" name='min_cust' className='block mx-auto p-0.5 text-sm w-11/12' required />
        </div>
        <div className='w-1/3 mx-1 bg-green-200 rounded'>
          <label htmlFor="max_cust" className='block text-center font-semibold text-xs my-1'>MAXIMUM CUSTOMERS PER HOUR</label>
          <input type="number" placeholder="0" name='max_cust' className='block mx-auto p-0.5 text-sm w-11/12' required />
        </div>
        <div className='w-1/3 mx-2 bg-green-200 rounded'>
          <label htmlFor="avg_cookies" className='block text-center font-semibold text-xs my-1'>AVERAGE COOKIES PER SALE</label>
          <input type="number" step='0.1' placeholder="0" name='avg_cookies' className='block mx-auto p-0.5 text-sm w-11/12' required />
        </div>
      </div>
    </form>
  );
}

export default CookieForm;