import logo from './images/logo.png'
import advitya from './images/advitya.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {

    // hooks
    const navigate = useNavigate()
    const [modalView, setModalView] = useState(sessionStorage.getItem('modalView') || 'flex')

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

    const handleHideModal = () => {
        setModalView('none')
        sessionStorage.setItem('modalView', 'none')
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
            <section id='modal' className='modal layer' style={{ display: modalView }}>
                <section className='modal box'>
                    <h1>By visiting this site, you agree to the following:</h1>
                    <h1>-> You shall read and follow the <a style={{color: 'aqua'}} href="/rules">rules of the event</a></h1>
                    <h1>-> You will not give spoilers or hints to other teams</h1>
                    <h1>-> You will not try to attack the system in any way</h1>
                    <button className='hide button' onClick={handleHideModal} style={{alignSelf: 'center', backgroundColor: 'chartreuse'}}>
                        ACCEPT
                        <img style={{maxWidth: '20px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="arrow icon" />
                    </button>
                </section>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Home;