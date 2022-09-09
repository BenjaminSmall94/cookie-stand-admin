import Link from 'next/link'

function Header() {
  return (
    <header className='flex justify-between items-center bg-green-500 p-3.5'>
      <h1 className='text-4xl'>Cookie Stand Admin</h1>
      <Link href={'/overview'} >
        <a className="inline-block bg-gray-100 p-0.5 rounded border border-black">Overview</a>
      </Link>
    </header>
  );
}

export default Header;