import React, { useState } from 'react'
import { usePosts } from '../components/PostContext';


const Archive = () => {
    const { onAddPost, createRandomPost } = usePosts();

    const [posts] = useState(() =>
        // 💥 WARNING: This might make your computer slow! Try a smaller `length` first
        Array.from({ length: 100 }, () => createRandomPost())
    );

    const [showArchive, setShowArchive] = useState(false);

    return (
        <aside>
            <h2>Post archive</h2>
            <button onClick={() => setShowArchive((s) => !s)}>
                {showArchive ? "Hide archive posts" : "Show archive posts"}
            </button>

            {showArchive && (
                <ul>
                    {posts.map((post, i) => (
                        <li key={i}>
                            <p>
                                <strong>{post.title}:</strong> {post.body}
                            </p>
                            <button onClick={() => onAddPost(post)}>Add as new post</button>
                        </li>
                    ))}
                </ul>
            )}
        </aside>
    );
}

export default Archive