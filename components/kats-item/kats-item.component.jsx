import React, {useState} from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		height: 'auto',
	    borderRadius: 16,
	    margin: 10,
	    shadowColor: "#000",
		shadowOffset: {
		width: 0,
		height: 2,
		},
		shadowOpacity: 2.29,
		shadowRadius: 3.65,
	},
  	images: {
	  	marginLeft:10,
	  	alignItems: 'center',
	  	justifyContent: 'center',
	    resizeMode: 'contain',
}, name: {
	justifyContent: 'center',
		paddingLeft: 10,
		paddingTop: 190
}
});

function KatsItem ({item, navigation}) {

	return (
		<View style={styles.item}>
	      <TouchableOpacity onPress={() => {
	      	navigation.navigate('kats view', {
	      		itemId: item.id
	      	})
	      }}>
		 <Image
			style={styles.images}
          	source={{
            width: 150,
            height: 250,
            uri: item.preview
        }}/>
          </TouchableOpacity>
          	<View style={styles.name}>
	          <Text style={{fontSize: 16}}>
	          {item.cat}	
	          </Text>
	      </View>	         
		</View>
	)
}

export default KatsItem;

