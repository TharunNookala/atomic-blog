import { usePosts } from '../components/PostContext';

const Results = () => {
    const { posts } = usePosts();

    return <p>🚀 {posts.length} atomic posts found</p>;

}

export default Results