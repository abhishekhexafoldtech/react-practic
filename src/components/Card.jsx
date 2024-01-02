function card (props) {
    return (
        <>
            <h1>card component {props.name}</h1>
            <button onClick={ ()=> props.sendData('xyz') }> click me</button>
        </>
    )
}

 
export default card