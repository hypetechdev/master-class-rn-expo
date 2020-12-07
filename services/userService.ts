export const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    return users
}

export const fetchPosts = async (userId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const posts = await res.json()

    return posts
}
