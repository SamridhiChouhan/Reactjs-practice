 function Price({oldPrice , newPrice} ){
    return (
        <>
        <b>
        <del><span>{oldPrice}</span></del>
        &nbsp; &nbsp;
        <span>{newPrice}</span>
        </b>
        </>
    )
}
export default Price;