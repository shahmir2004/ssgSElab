import { getPostData } from '../lib/posts';

export default function Home({ post }) {
    return (
        <div>
            <h1>{post.data.title}</h1>
            <p>{post.data.date}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}

export async function getStaticProps() {
    const post = getPostData();
    return {
        props: {
            post,
        },
    };
}
