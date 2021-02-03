import React, {useState} from 'react';
import { 
  Button, 
  View, 
  Text,
  TouchableOpacity 
} from 'react-native';
import Modal from 'react-native-modal';



function ErrorConnection () {

	return (
		<View>
				<Modal isVisible={true}>
							<View style={{flex: 1, justifyContent: 'center',
			                    alignItems: 'center'}}>
								<Text style={{color:'white'}}>
									Check Connection
								</Text>					
							</View>
						</Modal>
		</View>
		)
}

export default ErrorConnection;