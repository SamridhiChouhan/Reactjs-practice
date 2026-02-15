import Price from "./price";

function Card({productName ,idx}){
    let oldPrices = ["12,495", "11,900","1,599","599"];
    let newPrices = ["8,999","9,199","899","278"];
    let features = [["8000 DPI" , "5 Programmable Buttons"],
                    ["Initiative Touch Surface", "Designed for iPad Pro"],
                    ["Designed for iPad pro", "Initiative Touch Surface"],
                    ["Wireless Mouse 2.4GHz" , "Optical Orientations"]
                   ]
    return(
    <div className="card">
        <h4>{productName}</h4>
        <p>{features[idx][0]}</p>
        <p>{features[idx][1]}</p>
        <p className="price"><Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/></p>
    </div>
    )
}

export default Card ; 