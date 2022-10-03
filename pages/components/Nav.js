import Link from "next/link";


export default function Nav(props) {
    let elements = []
    for (let elem in props.objArry) {
        elements.push(<div><Link href={props.objArry[elem].url}>{props.objArry[elem].name}</Link><br/></div>)
    }
    console.log(elements)
    return (
        <div className={"nav"}>
            {elements}
        </div>
    )
}
