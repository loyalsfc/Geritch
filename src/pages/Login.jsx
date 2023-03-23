import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import React from 'react'
import { supabase } from '../supabaseClient'

function Login() {

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
