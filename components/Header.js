import Link from 'next/link'

function Header({ user, logout }) {
  return (
    <header className='flex justify-between items-center bg-green-400 p-3.5'>
      <h1 className='text-4xl'>Cookie Stand Admin</h1>
      <div>
        <p className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">{user}</p>
        <button onClick={logout} className="inline-block w-20 text-white bg-green-600 p-0.5 mx-0.5 rounded border border-black">Sign Out</button>
        <Link href={'/overview'} >
          <a className="inline-block w-20 bg-gray-100 p-0.5 mx-0.5 rounded border border-black text-center">Overview</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;