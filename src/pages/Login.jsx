import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'

function Login() {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    useEffect(()=>{
        if(user.user){
            navigate('/')
        }
    }, [])

    return (
        <main>
            <div className='container mx-auto'>
                <div className="max-w-md mx-auto pb-10 px-4">
                    <Auth
                        supabaseClient={supabase}
                        appearance={{theme: ThemeSupa}}
                        theme='dark'
                        providers={['google', 'facebook', 'twitter']}
                    />
                </div>
            </div>
        </main>
    )
}

export default Login
