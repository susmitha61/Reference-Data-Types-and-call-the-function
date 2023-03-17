function Test()
{
    let myobject={name:"Madras"};
    let newobject=myobject;
    myobject.name="Chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myarray);
    const Hi=()=>{alert("Check the console output")}
    return(
        <div><button onClick={Hi}>Reference Data Types and call the function</button></div>
    );

}
ReactDOM.render(<Test/>,document.getElementById("mydiv"));