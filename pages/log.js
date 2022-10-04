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
            <div id={"pop"}>
                <sl-color-picker value="#4a90e2" label="Select a color"/>
                <sl-dropdown>
                    <sl-button slot="trigger" caret>f</sl-button>
                    <sl-menu>
                        <sl-menu-item>love from</sl-menu-item>
                        <sl-menu-item>sf pro</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
                <sl-dropdown>
                    <sl-button slot="trigger" caret>t</sl-button>
                    <sl-menu>
                        <sl-menu-item>light</sl-menu-item>
                        <sl-menu-item>grey</sl-menu-item>
                        <sl-menu-item>dark grey
                        </sl-menu-item>
                        <sl-divider></sl-divider>
                        <sl-menu-item checked>auto</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>



            </div>
        <table>
            {tableRows}
        </table>



        </div>
    )
}