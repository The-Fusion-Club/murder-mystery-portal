import MouseParticles from 'react-mouse-particles'
import Confetti from 'react-confetti'
import { useEffect, useState } from 'react'

const Results = () => {

    // hooks
    const [particles, setParticles] = useState(250)
    useEffect(() => {
        setTimeout(() => {
            setParticles(50)
        }, 5000)
    })

    return(
        <>
            <section className='results page'>
                <h1 className="results title">RESULTS</h1>
                <div className='results headings'>
                    <h1>THE WINNING TEAMS</h1>
                </div>
                <div className='results teamname'>
                    <h1 id='winner-one'><img src="https://cdn-icons-png.flaticon.com/512/2502/2502713.png" alt="" style={{maxWidth: '50px', marginRight: '20px'}}/>SPAM AND EGGS</h1>
                    <h1 id='winner-two'><img src="https://cdn-icons-png.flaticon.com/512/3975/3975579.png" alt="" style={{maxWidth: '50px', marginRight: '20px'}}/>FOO BAR</h1>
                    <Confetti
                        width={window.availWidth}
                        height={'600'}
                        numberOfPieces={particles}
                        opacity={'0.6'}
                    />
                </div>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
            <MouseParticles g={5} num={3} color="random" level={1} />
        </>
    )
}

export default Results