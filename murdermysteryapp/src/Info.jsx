import { useEffect, useState } from "react"

const Info = () => {

    // hooks
    const [data, setData] = useState()
    useEffect(() => {
        setRankData()
    }, [])

    // fetching data
    const getRankData = async (rank) => {
        const data = await fetch(process.env.REACT_APP_SERVER_URL + '/getRank', {
            method:     'post',
            headers:    { 'Content-Type': 'application/json'},
            body:       JSON.stringify({ rank: rank })
        })
        .then((response) => { return response.json() })
        .catch((error) => { return null })
        return data
    }

    const setRankData = async () => {
        let temp = []
        temp.push(await getRankData(1))
        temp.push(await getRankData(2))
        temp.push(await getRankData(3))
        setData(temp)
    }

    return(
        <>
            <section className='card-container'>
                <section className="card five">
                    <h1>Leaderboard</h1>
                    {
                        data?.map((item, index) => {
                            if(item)
                                return(<div key={index} className='rank entry'><h6 className="rank team">{item.team}</h6><h6 className="rank time">{item.time} sec</h6></div>)
                            else
                                return(<></>)
                        })
                    }
                </section>
                <section className="card six">
                    <h1>Announcements</h1>
                    <div className='announcement-text'>Hi, please report to AB-209 :D</div>
                </section>
                <section className="card seven">
                    <h1>Final Results</h1>
                    <a href="/results">
                        <button className='action button'>
                            <img style={{ maxWidth: '30px'}} src="https://cdn-icons-png.flaticon.com/512/1549/1549612.png" alt="" />
                        </button>
                    </a>
                </section>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Info