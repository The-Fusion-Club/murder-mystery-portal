const Info = () => {
    return(
        <>
            <section id="info-page">
                <h1 className="page-title">PORTAL RULES</h1>
                <section className="alert-box">
                    <img style={{maxWidth: '20px'}} src="https://cdn0.iconfinder.com/data/icons/shift-interfaces/32/Error-512.png" alt="" />
                    <h6 className="alert-text">
                        Please keep the admin pin a secret! Contact <a href="tel:6361057904">6361057904</a> to reset immediately in case of a leak!
                    </h6>
                </section>
                <section className="rules-box">
                    <ul className="rules-list">
                        <li>Ensure that all pages contain <strong>'replmank.repl.co'</strong> in their URL</li>
                        <li>Admins must scan tickets and enter the pin <strong>only on their own devices</strong></li>
                        <li>Players must <strong>scan their tickets and verify their info</strong> before the event</li>
                        <li>Please <strong>check the timestamps</strong> after checkin and checkout</li>
                    </ul>
                </section>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Info