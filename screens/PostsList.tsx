import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Text } from '../components/Themed'
import { fetchPosts } from '../services/userService'

interface Props {}

const Item = ({ item, onPress, style }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text>{item.id}</Text>
        <Text>{item.title}</Text>
    </TouchableOpacity>
)

const PostsList = (props: Props) => {
    const route = useRoute<any>()
    const [posts, setPosts] = useState([])

    console.log('route', route)

    React.useEffect(() => {
        fetchPosts(route.params.userId).then((posts) => {
            // console.log('posts', posts)
            setPosts(posts)
        })
    }, [])

    const renderItem = ({ item }: any) => {
        console.log('item', item)
        return <Item item={item} />
    }

    return (
        <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id + ''}
            ListEmptyComponent={<Text>No items</Text>}
            ListHeaderComponent={<Text>MY POSTS from userID: {route.params.userId}</Text>}
        />
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
    },
})

export default PostsList
