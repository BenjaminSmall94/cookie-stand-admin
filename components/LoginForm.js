function LoginForm(props) {
  function handleSubmit(e) {
    e.preventDefault()
    props.login(e.target.username.value, e.target.password.value)
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2 min-w-max mx-auto my-3 p-3 bg-green-200 border-2 border-green-500 rounded">
      <label htmlFor="User Name" className='block text-center my-2 font-bold'>USER NAME</label>
      <input type="text" placeholder='username' name="username" className='block w-full p-1 my-2' required />
      <label htmlFor="password" className='block text-center my-2 font-bold'>PASSWORD</label>
      <input type="password" placeholder='password' name="password" className='block w-full p-1 my-2' required />
      <button type='submit' className='bg-green-500 p-2 rounded-sm w-full my-3'>SIGN IN</button>
    </form>
  )
}

export default LoginForm;
