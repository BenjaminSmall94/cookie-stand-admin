import Link from 'next/link'

export default function Overview() {
  return (
    <>
      <h1>Overview</h1>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </>
  )
}