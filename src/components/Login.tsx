import React, { FC } from 'react'
import { useSession, signIn } from 'next-auth/react'

const Login: FC = () => {
  const { status } = useSession()

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status !== 'authenticated') {
    return (
      <div>
        <p>あなたはログインしていません</p>
        <button onClick={() => signIn('google')}>Googleでログイン</button>
      </div>
    )
  }
  return null
}

export default Login
