import './App.css';
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Phones from "./components/Phones";
import Phone from "./components/Phone";
import axios from "axios";

function App() {

    const [phones, setPhones] = useState([]);
    const [selectedPhone, setSelectedPhone] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:5005/api/phones")
        .then(response => {
            setPhones(response.data);
        })
    }, [])

    function handlePhoneClick(id) {
        setLoading(true);

        axios.get(`http://localhost:5005/api/phones/${id}`)
        .then(response => {
            setLoading(false);
            setSelectedPhone(response.data);
        })
    }

    return (
        <div className="App">
                <Phones phones={phones} handlePhoneClick={handlePhoneClick}/>

            {
                loading && <p>Is Loading</p>
            }
            {
                selectedPhone && <Phone selectedPhone={selectedPhone}/>
            }

        </div>
    );
}

export default App;
