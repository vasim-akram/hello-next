import fetch from 'isomorphic-unfetch'

const Post = (props) => (
    <div>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}></img>
    </div>
)

Post.getInitialProps = async (context) => {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()
    return { show }
}

export default Post