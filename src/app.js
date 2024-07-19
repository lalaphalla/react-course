import ProfileCard from "./ProfileCard"

// import AlexaImage from "./images/alexa.png";
// import SiriImage from "./images/siri.png";
// import CortanaImage from "./images/cortana.png";
import searchImage from "./api";
import SearchBar from "./components/SearchBar";

searchImage('flower') 
function App() {
    const handleSubmit = (term) =>{
        console.log('handleSubmit',term);
    }

    return(
        <div>
            <h1>Personal Digital Assistantsaa</h1>
            {/* <ProfileCard title='phallaaaa' handle='@abc' image={AlexaImage}/>
            <ProfileCard title='phalla1' handle='@abc' image={SiriImage}/>
            <ProfileCard title='phalla2' handle='@abc'image={CortanaImage}/> */}
            <SearchBar onSubmit={handleSubmit}/>
            
        </div>
    )
}
export default App