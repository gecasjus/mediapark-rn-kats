import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import KatsOverview from '../components/kats-overview/kats-overview.component'
import KatsView from '../components/kats-view/kats-view.component'

const Stack = createStackNavigator()

export const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='kats' component={KatsOverview} />
				<Stack.Screen name='kats view' component={KatsView} />
			</Stack.Navigator>
		</NavigationContainer>
		)
}
