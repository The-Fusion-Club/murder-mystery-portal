import logo from './images/logo.png'
import advitya from './images/advitya.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    // hooks
    const navigate = useNavigate()

    // event handlers
    const handleInfoClick = () => {
        navigate('/info')
    }

    const handleActionsClick = () => {
        navigate('/actions')
    }

    const handleRulesClick = () => {
        navigate('/rules')
    }

    return(
        <>
            <header className='header'>
                <section className='logos'>
                    <img src={advitya} alt='advitya logo' className='advitya logo'/>
                    <img src={logo} alt="fusion logo" className='fusion logo'/>
                </section>
                <span className='copy-medium'>presents</span>
                <div className='event-title'><h1>How I Met Your Murderer!</h1></div>
                <section className='button-container'>
                    <button className='rules button' onClick={handleRulesClick}>
                        Rules
                        <img style={{maxWidth: '20px', borderRadius: '100%'}} src="https://e7.pngegg.com/pngimages/70/745/png-clipart-black-logo-computer-icons-information-symbol-information-miscellaneous-text-thumbnail.png" alt="arrow icon" />
                    </button>
                    <button className='info button' onClick={handleInfoClick}>
                        Info
                        <img style={{maxWidth: '20px', borderRadius: '100%'}} src="https://e7.pngegg.com/pngimages/70/745/png-clipart-black-logo-computer-icons-information-symbol-information-miscellaneous-text-thumbnail.png" alt="arrow icon" />
                    </button>
                    <button className='actions button' onClick={handleActionsClick}>
                        Actions
                        <img style={{maxWidth: '20px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="arrow icon" />
                    </button>
                </section>
            </header>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Home;