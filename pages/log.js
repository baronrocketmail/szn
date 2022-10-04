import {getName, getNotUnpaid, getUnpaid} from "./helperFunctions/dataFetching.mjs";
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

    let notUnpaid = await getNotUnpaid().then(x => {return x})





    return {
        props:{elements, notUnpaid},
        revalidate:1
    }
}
export default function Log(props){
    console.log(props.tableRows)

    let tableRows = []
    for(let elem in props.notUnpaid){
        if (props.notUnpaid[elem].status == "paid") tableRows.push(<tr><td>{props.notUnpaid[elem].name}</td><td>{props.notUnpaid[elem].amount}</td></tr>);
        else tableRows.push(<tr><td>{props.notUnpaid[elem].name}<sub>{props.notUnpaid[elem].status}</sub></td><td>{props.notUnpaid[elem].amount}</td></tr>);
    }

    return(
        <div>
        <Nav objArry={props.elements}/>
            <sl-button size="large">Click me</sl-button>
        <table>
            {tableRows}
        </table>

        </div>
    )
}