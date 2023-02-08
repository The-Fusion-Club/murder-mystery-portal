const Actions = () => {

    // event handlers
    const handleDownload = async () => {
        const value = document.getElementById('phone-field').value
        const uuid = await fetch(process.env.REACT_APP_SERVER_URL + '/getUUID', {
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

    const handleResult = async () => {
        const value = document.getElementById('seqno-field').value
        const timestamps = await fetch(process.env.REACT_APP_SERVER_URL + '/getTimestamps', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ seqno: value })
        })
        .then((response) => { return response.json() })
        .catch((error) => { return 'error' })
        if(timestamps === 'error') {
            document.getElementById('timestamp-error').style.display = 'flex'
            document.getElementById('results').style.display = 'none'
            return
        }
        else {
            document.getElementById('timestamp-error').style.display = 'none'
            document.getElementById('results').style.display = 'flex'
            try {
                const checkin = new Date(timestamps.checkin).toTimeString().substring(0, 18)
                document.getElementById('checkin-stamp').textContent = checkin
                const checkout = new Date(timestamps.checkout).toTimeString().substring(0, 18)
                const time = (new Date(timestamps.checkout).getTime() - new Date(timestamps.checkin).getTime())/1000
                document.getElementById('checkout-stamp').textContent = checkout
                document.getElementById('total-time').textContent = time + ' seconds'
            }
            catch {
                return
            }
        }
    }

    const handleCheckin = async () => {
        const seqno = document.getElementById('checkin-seqno-field').value
        const pin = document.getElementById('checkin-pin-field').value? document.getElementById('checkin-pin-field').value: localStorage.getItem('pin')
        const uuid = document.getElementById('checkin-uuid-field').value
        const resp = await fetch(process.env.REACT_APP_SERVER_URL + '/checkin', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ 
                seqno: seqno, 
                pin: pin,
                uuid: uuid, 
                key: process.env.REACT_APP_FRONTEND_VERIFICATION_KEY 
            })
        })
        .then((response) => { return response.status })
        .catch((error) => { return 'error' })
        if(resp === 200) {
            document.getElementById('checkin-error').style.display = 'none'
            document.getElementById('checkin-success').style.display = 'flex'
            localStorage.setItem('pin', pin)
        }
        else {
            document.getElementById('checkin-success').style.display = 'none'
            document.getElementById('checkin-error').style.display = 'flex'
        }
    }

    const handleCheckout = async () => {
        const seqno = document.getElementById('checkout-seqno-field').value
        const pin = document.getElementById('checkout-pin-field').value? document.getElementById('checkout-pin-field').value: localStorage.getItem('pin')
        const uuid = document.getElementById('checkout-uuid-field').value
        const resp = await fetch(process.env.REACT_APP_SERVER_URL + '/checkout', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ 
                seqno: seqno, 
                pin: pin,
                uuid: uuid, 
                key: process.env.REACT_APP_FRONTEND_VERIFICATION_KEY 
            })
        })
        .then((response) => { return response.status })
        .catch((error) => { return 'error' })
        if(resp === 200) {
            document.getElementById('checkout-error').style.display = 'none'
            document.getElementById('checkout-success').style.display = 'flex'
            localStorage.setItem('pin', pin)
        }
        else {
            document.getElementById('checkout-success').style.display = 'none'
            document.getElementById('checkout-error').style.display = 'flex'
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
                    <span className='error message' id='download-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        not found
                    </span>
                </section>
                <section className='card two'>
                    <h1>Timestamps</h1>
                    <input id='seqno-field' className='seqno field' type="tel" maxLength="3" placeholder='sequence #'/>
                    <button className='action button' onClick={handleResult}>
                        <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                    </button>
                    <section className='result-container' id='results'>
                        <h3>Checkin:  <br></br><span id='checkin-stamp'>00:00:00 GMT+0530</span></h3>
                        <h3>Checkout: <br></br><span id='checkout-stamp'>00:00:00 GMT+0530</span></h3>
                        <h3>Time:     <br></br><span id='total-time'>00:00:00 mm:ss:mm</span></h3>
                    </section>
                    <span className='error message' id='timestamp-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        not found
                    </span>
                </section>
                <section className='card three'>
                    <h1>Checkin</h1>
                    <input id='checkin-seqno-field' className='seqno field' type="tel" maxLength="3" placeholder='sequence #'/>
                    <input id='checkin-uuid-field' className='uuid field' type="text" maxLength="4" placeholder='4 digits of uuid'/>
                    <input id='checkin-pin-field' className='pin field' type="password" maxLength="6" placeholder='admin pin'/>
                    <button className='action button' onClick={handleCheckin}>
                        <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                    </button>
                    <span className='success message' id='checkin-success'>
                        <img style={{ maxWidth: '20px'}} src="https://static.vecteezy.com/system/resources/previews/010/152/358/original/tick-icon-sign-symbol-design-free-png.png" alt="" />
                        checked-in
                    </span>
                    <span className='error message' id='checkin-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        try again
                    </span>
                </section>
                <section className='card four'>
                    <h1>Checkout</h1>
                    <input id='checkout-seqno-field' className='seqno field' type="tel" maxLength="3" placeholder='sequence #'/>
                    <input id='checkout-uuid-field' className='uuid field' type="text" maxLength="4" placeholder='4 digits of uuid'/>
                    <input id='checkout-pin-field' className='pin field' type="password" maxLength="6" placeholder='admin pin'/>
                    <button className='action button' onClick={handleCheckout}>
                        <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                    </button>
                    <span className='success message' id='checkout-success'>
                        <img style={{ maxWidth: '20px'}} src="https://static.vecteezy.com/system/resources/previews/010/152/358/original/tick-icon-sign-symbol-design-free-png.png" alt="" />
                        checked-in
                    </span>
                    <span className='error message' id='checkout-error'>
                        <img style={{ maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                        try again
                    </span>
                </section>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Actions;