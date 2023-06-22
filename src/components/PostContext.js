import { faker } from "@faker-js/faker";
import { createContext, useContext, useState } from "react";

function createRandomPost() {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase(),
    };
}

const PostContext = createContext();

function PostProvider({ children }) {
    const [posts, setPosts] = useState(() =>
        Array.from({ length: 30 }, () => createRandomPost())
    );
    const [searchQuery, setSearchQuery] = useState("");

    // Derived state. These are the posts that will actually be displayed
    const searchedPosts =
        searchQuery.length > 0
            ? posts.filter((post) =>
                `${post.title} ${post.body}`
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())
            )
            : posts;

    function handleAddPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    function handleClearPosts() {
        setPosts([]);
    }

    return (
        <PostContext.Provider value={{
            posts: searchedPosts,
            onClearPosts: handleClearPosts,
            onAddPost: handleAddPost,
            searchQuery,
            setSearchQuery,
            createRandomPost,
        }} >
            {children}
        </PostContext.Provider>
    )
}
//custom hook to avoid writing useContext(PostContext) always
function usePosts() {
    const context = useContext(PostContext);
    return context;
}
// export { PostContext, PostProvider };  //for exporting whithout custom usePosts hook
export { usePosts, PostProvider };