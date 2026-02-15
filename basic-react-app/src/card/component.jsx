import Head from "./head"
import Card from "./card"

function Component(){
    return (
        <>
        <Head/>
        <div className="container">
            <Card productName="Logitech MX Master"  idx={0}/>
            <Card productName="Apple Pencil (2nd Gen)"  idx={1}/>
            <Card productName="Zebronics"  idx={2}/>
            <Card productName="Petronics toad"  idx={3}/>
        </div>
        </>
    )
}

export default Component;