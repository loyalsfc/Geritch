import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import React from 'react'
import { supabase } from '../supabaseClient'

function Login() {
    supabase.auth.onAuthStateChange(async (event, session) => {
        console.log(event, session)
    })
  

    return (
        <main>
            <div className='container mx-auto'>
                <div className="max-w-md mx-auto pb-10 ">
                    <Auth
                        supabaseClient={supabase}
                        appearance={{theme: ThemeSupa}}
                        theme='dark'
                        providers={['google', 'facebook', 'twitter']}
                    />
                </div>
                {/* <button onClick={signInWithGoogle} className='btn-pry'>Login</button> */}
            </div>
        </main>
    )
}

export default Login
