import logoImg from '../assets/logoGitHub.png'

import '../styles/profile.scss'


export function Profile() {
    return (
        <div id="home-page">
            <aside>
                <div>
                    <img src={logoImg} alt="Logo do GitHub"></img>
                    <h2>integration with GitHub</h2>
                </div>
            </aside>
            <main>
                <div>
                    <header>
                        <img src={logoImg}></img>
                        <span className='container'>
                            <span className='user'>
                                <h1>User: nataliasetubal</h1>
                                <h1>Id: 73369654</h1>
                            </span>
                            <span className='followers'>
                                <p>followers: 7  following: 2</p>
                            </span>
                        </span>
                    </header>
                    <section>
                        <div className='information'>
                        <p></p>
                        <p>name: Natália Gomes</p>
                        <p>location: Ceará, Brasil</p>
                        <p>bio: www.linkedin.com/in/natalia-setubal</p>
                        <p>public_repositories: 4</p>
                        <p>public_gists: 1</p>
                        <p>created_at: 2020-10-23</p>
                        <p></p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}