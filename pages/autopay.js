import {getName, getUnpaid} from "./helperFunctions/dataFetching.mjs";
import Nav from "./components/Nav";

export async function getStaticProps(context) {

    let elements = [{name:"<------", url:"/"}]
    elements.push({name:"autopay: active", url:"/"})

    return {
        props:{elements},
        revalidate:1
    }
}

export default function autopay(props){

    return(
        <Nav objArry={props.elements}/>
    )
}