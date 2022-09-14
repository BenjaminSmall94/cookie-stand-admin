import { hours } from './data'

function CookieReport({ stands, loading, onDelete }) {

  const total_hourly_sales = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  function handleDelete(stand) {
    for (let i = 0; i < stand.hourly_sales.length; i++) {
      total_hourly_sales[i] -= stand.hourly_sales[i];
    }
    onDelete(stand.id)
  }

  if (!loading) {
    for (let i = 0; i < stands.length; i++) {
      let sales = stands[i].hourly_sales;
      for (let j = 0; j < sales.length; j++) {
        total_hourly_sales[j] += sales[j];
      }
    }
    total_hourly_sales[total_hourly_sales.length - 1] = total_hourly_sales.reduce((partialSum, a) => partialSum + a, 0);
  }

  if (!loading) {
    return (
      stands.length === 0 ?
        <h3 className='text-center my-4'>No Cookie Stands Available</h3> :
        <table className='w-3/4 mx-auto my-4'>
          <thead>
            <tr className='bg-green-400'>
              <th className='w-40 pl-1 text-left'>Location</th>
              {hours.map((hour, idx) => <th key={idx}>{hour}</th>)}
              <th className='text-left pl-2'>Totals</th>
            </tr>
          </thead>
          <tbody>
            {stands.map(stand => (
              <tr key={stand.id} className={`bg-green-${200 + stand.id % 2 * 100}`}>
                <th className='border border-black pl-4 font-bold text-left'>{stand.location}
                  <svg onClick={() => handleDelete(stand)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="inline float-right w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </th>
                {stand.hourly_sales.map((sales, idx) => <td key={idx} className='border border-black text-right pr-1 w-12'>{sales}</td>)}
                <td className='border border-black text-right pr-1 w-12'>{stand.hourly_sales.reduce((partialSum, a) => partialSum + a, 0)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className='bg-green-400'>
              <th className='border border-black pl-1 text-left'>Totals</th>
              {total_hourly_sales.map((sales, idx) => <td key={idx} className='border border-black text-right pr-1'>{sales}</td>)}
            </tr>
          </tfoot>
        </table>
    );
  } else {
    return <p className='text-center'>Loading...</p>
  }
}


export default CookieReport;
