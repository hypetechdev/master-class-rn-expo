import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

import { Text } from '../components/Themed'
import { fetchUsers } from '../services/userService'

interface Props {}

const UsersList = (props: Props) => {
    const navigation = useNavigation<any>()

    const [users, setUsers] = React.useState<[] | null>(null)

    useFocusEffect(() => {
        console.log('OnFOcus')
    })

    React.useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    const handleNewScreen = (userId: string) => {
        navigation.push('TabOneDetailsScreen', {
            userId,
        })
    }

    const isLoading = !users
    const isEmpty = !users?.length

    if (isLoading) {
        return <ActivityIndicator size="large" />
    }

    if (isEmpty) {
        return <Text>No users</Text>
    }

    return (
        <>
            {users?.map((user: any, i) => (
                <ListItem
                    key={i}
                    bottomDivider
                    onPress={() => {
                        handleNewScreen(user?.id)
                    }}>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.username}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            ))}
        </>
    )
}

export default UsersList
