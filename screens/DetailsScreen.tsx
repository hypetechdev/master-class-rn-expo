import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PostsList from './PostsList'

interface Props {}

const DetailsScreen = (props: any) => {
    console.log('props', props)
    const handleGoBack = () => {
        props.navigation.goBack()
    }

    return (
        <View style={styles.screen}>
            <PostsList />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {},
    title: {
        fontSize: 50,
        color: 'green',
    },
})

export default DetailsScreen
