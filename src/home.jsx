import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('akhil');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        setName('arya');
        setAge(23);
        console.log('hello ninjas', e);
    }

    const handleClickAgain = (name, e) => {
        setName('akhil');
        setAge(25);
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <h1>{name} is {age} years old</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>
        </div>
    );
}

export default Home;