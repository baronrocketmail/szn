import {getName, getUnpaid} from "./helperFunctions/dataFetching.mjs";
import Nav from "./components/Nav";

export async function getStaticProps(context) {

    let elements = [{name:"<------", url:"/"}]
    elements.push({name:"", url:"autopay"})
    let allUnpaid = [...await getUnpaid().then(x => {return x})]

    for (let elem in allUnpaid) {
        allUnpaid[elem].name = ""
        elements.push(allUnpaid[elem])
    }

    elements.push({name:"...", url:"/"})

    return {
        props:{elements},
        revalidate:1
    }
}
export default function Log(props){

    return(
        <Nav objArry={props.elements}/>
    )
}