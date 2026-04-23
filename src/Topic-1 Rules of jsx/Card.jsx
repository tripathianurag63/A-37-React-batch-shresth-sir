const Card = () => {
    const user = {
        username: "Anurag Tripathi",
        age: 23,
        city: "Noida",
        email: "anurag@gmail.com",
        
    }

    return <>
        <h2>Hello Developers</h2>
        <h3>Username: {user.username}</h3>
        <h3>Age: {user.age}</h3>
        <h3>City: {user.city}</h3>
        <h3>Email: {user.email}</h3>
    </>
}

export default Card;