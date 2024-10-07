export default function ChildComponent (props) {
    console.log("ChildComponent Rendering....");
    return <p>Hello, {props.name}</p>
}