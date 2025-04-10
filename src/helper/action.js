'use server'
import axios from 'axios';
const HandleSubmit = async (prevState , e) => {
   
    console.log("e", e);
  
    try{
        await axios.post('http://localhost:5000/employees',{
        "id": e.get('id'),
        "name": e.get('name'),
        "position": e.get('position'),
        "department": e.get('department'),
        "email": e.get('email')
       
       })       
      return {success: true};
    }catch (error) {
        return {success: false, error: error.message};
    }
       

};
export default HandleSubmit;

