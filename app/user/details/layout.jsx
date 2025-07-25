
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'

const Layout = async ({children}) => {
    const session = await auth();
    if(session==null){
        redirect('/user/signin')
    }
  return (
    <>{children}</>
  )
}

export default Layout