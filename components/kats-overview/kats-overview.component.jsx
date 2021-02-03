import React, {useState, useEffect} from 'react'
import { 
  View, 
  StyleSheet, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  TextInput 
} from 'react-native';

import { useSelector, useDispatch } from "react-redux";

import KatsItem from '../kats-item/kats-item.component'

import { requestCats } from '../../redux/kats/kats.actions';
import { filterCats } from '../../redux/kats/kats.actions'

import Spinner from 'react-native-loading-spinner-overlay';
import Modal from 'react-native-modal';


const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    height:750,
    marginTop: 0
  }, spinnerTextStyle: {
    color: 'black'
  }, filterStyle: {
    width:'20%',
    backgroundColor:'orange',
    marginHorizontal:30,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf:'center',
    marginTop: 20
  }, modalContainer: {
    flex:1, 
    flexDirection:'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop:100
  }, filterOptions: {
    width:'25%',
    borderColor:'white',
    height: '20%',
    borderWidth:1,
    marginHorizontal:25,
    borderRadius: 12,
  }, filterText: {
    color:'white',
    alignSelf:'center',
    padding:0,
    fontSize: 30,
  }, inputWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:150,
  }, inputStyle: {
    height: 40, 
    width:150, 
    borderColor: 'gray', 
    borderWidth: 1, 
    color: 'white'
  }, modalButtonStyle: {
    width:'30%', 
    height: 32, 
    alignSelf:'center', 
    backgroundColor:'orange', 
    marginHorizontal:30, 
    borderRadius: 5,
  }
});

function KatsOverview({navigation}) {

  const [katFilter, setKatFilter] = useState([])

  const [text, onChangeText] = useState(undefined);

  const [isModalVisible, setModalVisible] = useState(false);


  const katsImages = useSelector(state => state.kats.katsList)
  const katsCount = useSelector(state => state.kats.count)
  const isLoading = useSelector(state => state.kats.isUploading)

  const dispatch = useDispatch();


  useEffect(() => {
    let result = [...katsImages];

      if (katsCount) {
      result = result.slice(0, katsCount)
      }
      setKatFilter(result);

  }, [katsImages, katsCount])

useEffect(() => {
  dispatch(requestCats());
}, [])

const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


	return (
		<View style={{flex:1}}>
      <Spinner
          visible={isLoading}
          color={'black'}
          textContent={'Loading...'}
          style={styles.spinnerTextStyle}
        />
        <TouchableOpacity 
          style={styles.filterStyle}
          onPress={toggleModal}>
          <Text style={{color:'white', alignSelf:'center', padding:5}}>Filter</Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modalContainer}>     
               <TouchableOpacity
                    onPress={() => dispatch(filterCats(30))}
                    style={styles.filterOptions}
                  >
                    <Text style={styles.filterText}>30</Text>
                </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(filterCats(50))}
                    style={styles.filterOptions}
                    >
                   <Text style={styles.filterText}>50</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => dispatch(filterCats(100))}
                    style={styles.filterOptions}>
                   <Text style={styles.filterText}>100</Text>
                  </TouchableOpacity>
                  </View>
                  <View 
                    style={styles.inputWrapper}>
                    <View style={{flex: 1}}>
                      <TextInput
                        placeholder='type number'
                        placeholderTextColor="white"
                        style={styles.inputStyle}
                        onChangeText={(text) => {
                          onChangeText(text);
                          dispatch(filterCats(text))
                        }}
                        value={text}
                        defaultValue={text}
                      />
                    </View>
                  </View>
                  <TouchableOpacity 
                    style={styles.modalButtonStyle}
                    onPress={toggleModal}>
                    <Text style={{color:'white', alignSelf:'center', padding:7}}>Close</Text>
                  </TouchableOpacity>
          </Modal>
             <View style={styles.container}>
              <FlatList
                style={{flex:1}}
                data={katFilter}
                renderItem={({item}) => <KatsItem key={item.id} item={item} navigation={navigation}/>}
                keyExtractor={item => item.id}
              />
          	</View>
      </View>
		)
}

export default KatsOverview;
