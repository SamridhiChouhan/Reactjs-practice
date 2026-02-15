function Message({username , textcolor}){
    // let style = {color : textcolor}
    return (
        <h3 style={{color : textcolor}}>Hello , {username}</h3>
    )
}

export default Message ;