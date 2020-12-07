import * as React from 'react'
import { ActivityIndicator, Button, StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { fetchUsers } from '../services/userService'
import UsersList from './UsersList'

export default function HomeScreen(props: any) {
    // console.log('props', props)

    const [users, setUsers] = React.useState<[] | null>(null)

    React.useEffect(() => {
        fetchUsers().then((users) => {
            setUsers(users)
        })
    }, [])

    // const handleNewScreen = () => {
    //     props.navigation.push('TabOneDetailsScreen')
    // }

    const isLoading = !users
    const isEmpty = !users?.length

    if (isLoading) {
        return <ActivityIndicator size="large" />
    }

    if (isEmpty) {
        return <Text>No users</Text>
    }

    return <View style={styles.container}>{<UsersList />}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        backgroundColor: 'blue',
        fontWeight: 'bold',
    },
    separator: {
        backgroundColor: 'yellow',
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
})
