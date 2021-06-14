import axios from 'axios';

//you can choose to use it or not
let baseUrl = 'http://localhost:3000/api/cats'

export const getCats = async () => {
  //make an axios.get call all the cats and store the response in a variable
  //don't forget to return 

  // return axios.get(`${baseUrl}`)
  return await axios.get("http://localhost:3001/api/cats");
}

export const createCat = async (data) => {
  // make an axios.post call to create a cat
  // pass the data as a second argument to your post function and store the response in a variable
   //don't forget to return 
   return await axios({
		url: baseUrl,
		method: "POST",
		data: data,
	}).then((res) => console.log(res)).catch((err) => console.log(err));
}
export const destroyCat = async (id) => {
  //make an axios.delete call to delete a cat, interpolating the `id` with your baseUrl, store your response in a variable 
  //don't forget to return
  return await axios({
		url: `localhost://3001/api/cats/${id}`,
		method: "PUT",
		data: data,
	}).then((res) => console.log(res)).catch((err) => console.log(err));
}