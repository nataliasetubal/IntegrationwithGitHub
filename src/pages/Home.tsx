import React, { FormEvent, useState } from "react"
import api from "../services/api"
import { Form } from "./Form"

import logoImg from '../assets/logoGitHub.png'

import '../styles/home.scss'
import { Profile } from "./Profile"

interface Usuario {
    user: {
        login: string
        name: string
        id: number
        avatar_url: string
        html_url: string
        location: string
        bio: string
        public_repos: number
        public_gists: number
        followers: number
        following: number
        created_at: string
        prevState: undefined
    }
}

interface UsuarioPesquisado {
    user: {
        login: string
        name: string
        id: number
        avatar_url: string
        html_url: string
        location: string
        bio: string
        public_repos: number
        public_gists: number
        followers: number
        following: number
        created_at: string
        prevState: undefined
    }
}

const Home: React.FC = () => {
    const [inputErro, setNewErro] = useState('')
    const [user, setNewUser] = useState('')

    const [profile, setProfile] = useState<UsuarioPesquisado | undefined>(undefined)

    async function handleSubmit(event: FormEvent<HTMLFormElement>,): Promise<void> {
        event.preventDefault();
        if (!user) {
            setNewErro('Digite o usuário')
            return
        }
        try {
            const response = await api.get<Usuario>(`users/${user}`)
            const profileSearched = response.data
            setProfile(profileSearched)
            setNewErro('')
        }
        catch (err) {
            setNewErro('Usuário não encontrado')
        }
    }


    return (
        <div id="home-page">
            <section>
                <div>
                    <img src={logoImg} alt="Logo do GitHub"></img>
                    <h1>Integration with GitHub</h1>
                </div>
                <div>
                    <h2>Insira seu usuario do GitHub e veja seu perfil</h2>
                    <p>{inputErro}</p>
                    <Form hasError={!!inputErro} onSubmit={handleSubmit}>
                        <input
                            type='e-mail'
                            required
                            value={user}
                            onChange={event => setNewUser(event.target.value)}
                            maxLength={60}
                            placeholder="<> Insira seu usuário </>"></input>
                        <button>
                            Entrar
                        </button>
                    </Form>
                </div>
            </section>
                {profile ? <Profile profile={profile} /> : null}
        </div>
    )
}

export { Home }
