import fullData from "../data/dataco.js";
import Card from "./cardco.js";

export default function Cardgroup() {
    
    return (

        fullData.map(item => (
            <Card data={ item } key={item.id} />
        )
    )
)
};
