import { FormEvent, useState } from "react"
import { useHistory } from 'react-router-dom';
import logoImg from '../assets/logoGitHub.png'

import '../styles/home.scss'

export function Home() {
    const history = useHistory()
    const [email, setNewEmail] = useState('')

    async function handleEmail(event: FormEvent) {
        event.preventDefault();
        
        const user = email.substring(0, email.indexOf("@"));
        const domain = email.substring(email.indexOf("@") + 1, email.length);
        if ((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") === -1) &&
            (domain.search("@") === -1) &&
            (user.search(" ") === -1) &&
            (domain.search(" ") === -1) &&
            (domain.search(".") !== -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1) &&
            (domain.search('.') <= 2)){
            console.log("E-mail valido", "<>", user , "<>" , domain);
            history.push('/profile')
        } else {
            console.log('Email inválido')
        }
    }


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
                    <h1>Insira seu e-mail do GitHub e veja seu perfil</h1>
                    <p id='msgemail'></p>
                    <form onSubmit={handleEmail}>
                        <input
                            type='e-mail'
                            required
                            maxLength={60}
                            onChange={event => setNewEmail(event.target.value)}
                            value={email}
                            placeholder="<> Insira seu e-mail </>"></input>
                        <button>
                            Entrar
                        </button>
                    </form>
                </div>
            </main>
        </div>
    )
}