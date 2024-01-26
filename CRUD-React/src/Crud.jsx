import './App.css'

 function Crud (){

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" />
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default Crud;