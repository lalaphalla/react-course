import axios from 'axios'

const searchImage = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 8O50V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y'            
        },
        params: {
            query: term
        }
    })
    console.log('API');
    console.log(response.data.results);
    return response.data.results
}
export default searchImage