function ProfileCard({ title = 'title', handle = '@handle', image = '' }) {
    console.log(title, handle);
    return (
        <div>
            <img src={image} alt="pda logo" />
            <h1>Title: {title}</h1>
            <div>Handle: {handle}</div>
        </div>
    )
}
export default ProfileCard