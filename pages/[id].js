import { getUnpaid} from "./helperFunctions/dataFetching.mjs";
import Nav from "./components/Nav";

export async function getStaticPaths(){
    return {
        paths: [{params: {id: "deposit"}}, {params:{id:"october2022"}}],
        fallback: false
    }
}

export async function getStaticProps(context) {

    let elements = [{name:"<------", url:"/"}]
    elements.push({name:"", url:"autopay"})

    let allUnpaid = [...await getUnpaid().then(x => {return x})]

    for (let elem in allUnpaid) {
        if (allUnpaid[elem].url != context.params.id ){
            allUnpaid[elem].name = ""
            elements.push(allUnpaid[elem])
        } else {
            allUnpaid[elem].name = allUnpaid[elem].name + ": $" +allUnpaid[elem].amount
            allUnpaid[elem].url = "/"
            elements.push(allUnpaid[elem])
            break;
        }
    }

    return {
        props:{elements},
        revalidate: 1
    }
}
export default function Id(props){
    return(
        <Nav objArry = {props.elements}/>
    )
}