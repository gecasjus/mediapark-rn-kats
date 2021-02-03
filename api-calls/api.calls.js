import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const fetchCats = async () => {

  let catMap = [];
  let maxItter = 100;

  //random images
  let max = 16
  let value = 0
  let up = true

  do {
    try {
  await axios.get(`http://placekitten.com/200/300?image=${value}`)
   .then(res => {
      let cat = Object.assign({}, {
                  preview: res.config.url,
                  id: uuidv4(),
              }
        )
      catMap.push(cat)
     })
      maxItter--
      if (up == true && value <= max) {
       value++

      if (value == max) {
        up = false;
      }
    }  else {
        up = false
        value--;

      if (value == 0) {
        up = true;
        }
      }
      
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  while (maxItter > 0);
  return catMap
} 