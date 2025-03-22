const Ganjil = ({value}) => {
    return (
        <>
            <h1>{value} adalah Ganjil</h1>
        </>
    )
}
const Genap = ({value}) => {
    return (
        <>
            <h1>{value} adalah Genap</h1>
        </>
    )
}
const Conditional = ({value}) => {

    {   if(value % 2 === 0){
            return <Genap value={value} />
        }
        return <Ganjil value={value} />
    }
}

export default Conditional;