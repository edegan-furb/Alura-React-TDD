import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label='Logo'></div>
            <img className='participant' src="/images/participante.png" alt="Participant with a gift in hand" />
        </header>
    )
}

export default Header