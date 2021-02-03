import React, {useState, useEffect} from 'react';

import { useSelector } from "react-redux";

import { StyleSheet, Text, View, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
  	justifyContent: 'center',
  	alignSelf: 'stretch',
    resizeMode: 'contain',
    shadowColor: "#000",
	shadowOffset: {
	width: 0,
	height: 3,
	},
	shadowOpacity: 2.29,
	shadowRadius: 5.65,
  },
  heading: {
  	  fontSize: 40,
      marginTop: 40
  },
  text: {
      marginHorizontal: 8,
      marginVertical: 10
    },
    content: {
    	backgroundColor: 'white', 
    	padding: 10, 
    	marginTop:30, 
    	height: 500, 
    	borderRadius:5
    }
})


function KatsView ({route, navigation}) {

	const [item, setItem] = useState([])

	const { itemId } = route.params;

	const katsImages = useSelector(state => state.kats.katsList)

	useEffect(() => {
		let itemview = katsImages.filter(kat => kat.id === itemId)
			setItem(itemview)
	}, [itemId, katsImages])

	return(
		<View style={styles.container}>
		{
			item.map((item) => (
			<View key={item.id}>
				<Image
					style={styles.image}
					source={{
					height: 300,
		            uri: item.preview
		        }}
					/>
				<View style={styles.content}>
					<Text style={styles.heading}>
						{item.cat}
					</Text>
					<Text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</Text>
				</View>	
			</View>	
				))
		}

		</View>
		)
}



export default KatsView;