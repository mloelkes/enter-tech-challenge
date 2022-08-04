function Phones(props) {
    return (
        <div className="Phones">
        <ul>
            {props.phones?.map(phone => (
                <li key={phone.id}>
                    <button onClick={() => props.handlePhoneClick(phone.id)}>
                        <span>Name: {phone?.name} </span>
                        <span>Manufacturer: {phone?.manufacturer} </span>
                        <span>Color: {phone?.color}</span>
                    </button>
                </li>
            ))}
        </ul>
    </div>
    )
}

export default Phones;
