import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <div>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post/id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    return {
        shows: data
    }
}

export default Index