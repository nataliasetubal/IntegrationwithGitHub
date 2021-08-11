import { FC } from 'react'
import '../styles/profile.scss'

interface Usuario {
    profile?: any
}

const Profile: FC<Usuario> = ({ profile }) => (
    <div id="home-page">
        <main>
            <div>
                <header>
                    <img src={profile.avatar_url} alt='foto de perfil'></img>
                    <span className='container'>
                        <span className='user'>
                            <h1>User: {profile.login}</h1>
                            <h1>Id: {profile.id}</h1>
                        </span>
                        <span className='followers'>
                            <p>followers: {profile.followers}  following: {profile.following}</p>
                        </span>
                    </span>
                </header>
                <section>
                    <div className='information'>
                        <p></p>
                        <p>name: {profile.name}</p>
                        <p>location: {profile.location}</p>
                        <p>bio: {profile.bio}</p>
                        <p>public_repositories: {profile.public_repos} </p>
                        <p>public_gists: {profile.public_gists}</p>
                        <p>created_at: {profile.created_at} </p>
                        <p></p>
                    </div>
                </section>
                <footer>
                    <div className='botaoPerfil'>
                        <p>Veja o perfil no link:</p>
                        <a href={profile.html_url}>{profile.html_url}</a>
                    </div>
                </footer>
            </div>
        </main>
    </div>
)

export { Profile }