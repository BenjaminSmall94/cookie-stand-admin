import { hours } from './data'
const hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]

function CookieReport(props) {
  return (
    props.stands.length === 0 ?
      <h3 className='text-center my-4'>No Cookie Stands Availalbe</h3> :
      <table className='w-1/2 mx-auto my-4'>
        <thead>
          <tr className='bg-green-500'>
            <th>Location</th>
            {hours.map((hour, idx) => <th key={idx}>{hour}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.stands.map(stand => (
            <tr key={stand.id} className={`bg-green-${300 + stand.id % 2 * 100}`}>
              <td className='border border-black'>{stand.location}</td>
              {hourlySales.map((sales, idx) => <td key={idx} className='border border-black'>{sales}</td>)}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className='bg-green-500'>
            <th className='border border-black'>Totals</th>
            {hourlySales.map((sales, idx) => <td key={idx} className='border border-black'>{sales * props.stands.length}</td>)}
          </tr>
        </tfoot>
      </table>
  );
}

export default CookieReport;
