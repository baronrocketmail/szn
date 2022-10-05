import {getUnpaid, getName} from "./helperFunctions/dataFetching.mjs";
import Nav from "./components/Nav";

export async function getStaticProps(context) {

    let elements = [...await getName().then(x => {return x})]
    elements.push({name:"autopay", url:"autopay"})
    elements.push(...await getUnpaid().then(x => {return x}))
    elements.push({name:"...", url:"log"})

    return {
        props:{elements},
        revalidate:1
    }
}

export default function Home(props) {
  return (
       <Nav objArry = {props.elements}/>
  )
}
