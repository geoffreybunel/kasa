import './Error.scss'

function Error() {
    return (
        <div className="Error-container">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="./">Retourner sur la page d’accueil</a>
        </div>
    )
}
export default Error