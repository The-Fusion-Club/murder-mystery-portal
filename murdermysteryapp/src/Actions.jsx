import logo from './images/logo.png'
import advitya from './images/advitya.png'
import { useNavigate } from 'react-router-dom'

const Actions = () => {

    // hooks
    const navigate = useNavigate()

    // event handlers
    const handleDownload = async () => {
        const value = document.getElementById('phone-field').value
        const uuid = await fetch('https://ticketsAPI.replmank.repl.co/getUUID', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ phone: value })
        })
        .then((response) => { return response.json() })
        .catch((error) => { return 'error' })
        if(uuid === 'error') {
            document.getElementById('download-error').style.display = 'flex'
        }
        else {
            window.location.replace('https://ticketsAPI.replmank.repl.co/verify/' + uuid)
        }
    }

    const handleTiming = async () => {
        const value = document.getElementById('seqno-field').value
        const timestamps = await fetch('https://ticketsAPI.replmank.repl.co/getTimestamps', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ seqno: value })
        })
        .then((response) => { return response.json() })
        .catch((error) => { return 'error' })
        if(timestamps === 'error') {
            document.getElementById('timestamp-error').style.display = 'flex'
        }
        if(timestamps.checkin) {
            document.getElementById('results').style.display = 'flex'
        }
    }

    return(
        <>
            <section className='card-container'>
                <section className='card one'>
                    <h1>Download Ticket</h1>
                    <input id='phone-field' className='phone field' type="tel" maxLength="10" placeholder='phone number'/>
                    <button className='action button' onClick={handleDownload}>
                        <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                    </button>
                    <span className='error-message' id='download-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        not found
                    </span>
                </section>
                <section className='card two'>
                    <h1>Timestamps</h1>
                    <input id='seqno-field' className='seqno field' type="tel" maxLength="3" placeholder='sequence #'/>
                    <button className='action button' onClick={handleTiming}>
                        <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                    </button>
                    <section className='result-container' id='results'>
                        <h3>Checkin:  <br></br><span id='checkin-stamp'>00:00:00 GMT+0530</span></h3>
                        <h3>Checkout: <br></br><span id='checkout-stamp'>00:00:00 GMT+0530</span></h3>
                        <h3>Time:     <br></br><span id='total-time'>00:00:00 mm:ss:mm</span></h3>
                    </section>
                    <span className='error-message' id='timestamp-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        not found
                    </span>
                </section>
                <section className='card three'>
                    LEADERBOARD
                </section>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Actions;