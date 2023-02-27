import { useEffect, useState } from "react"

const Leaderboard = () => {

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
        for(let i = 1; i < 50; i++) {
            temp.push(await getRankData(i))
        }
        setData(temp)
    }

    return(
        <>
            <section className='leaderboard page'>
                <h1 className="results title">LEADERBOARD</h1>
                <div className='leaderboard display'>
                    <div style={{display: !data? 'flex': 'none'}} className='loading'>Loading ==></div>
                    {
                        data?.map((item, index) => {
                            if(item)
                                return(
                                    <div className="team unit">
                                        <h1>{item.rank}</h1>
                                        <h1>{item.team}</h1>
                                        <h1>{item.time}</h1>
                                    </div>
                                )
                            else
                                return(<></>)
                        })
                    }
                </div>
            </section>
            <footer>
                made with ♡ by mank
            </footer>
        </>
    )
}

export default Leaderboard