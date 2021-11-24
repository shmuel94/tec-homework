const Long_Text = ({text})=> {
const style = {color :text.length >5  ? "red" : "green"};
return (<h2 style={style}> {text}</h2>)
}
export default Long_Text;