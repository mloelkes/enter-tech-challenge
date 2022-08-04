function Phone(props) {
    return (
        <div className="Phone">
        <p>{props.selectedPhone.name}</p>
        <p>{props.selectedPhone.manufacturer}</p>
        <p>{props.selectedPhone.color}</p>
        <img src={`/images/${props.selectedPhone.imageFileName}`} alt="phone"/>
    </div>
    )
}

export default Phone;