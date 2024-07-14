import "./styles/home.css"
import {useState} from 'react';

function Home(){

    let [task,setTask] = useState(['']);

    let [list,setList] = useState([]);

   
    const handleEnter = (e) => {
        if(e.keyCode===13){
            handleAdd();
        }
    }


    const handleAdd = () => { 
        if (task !== '') {
        setList([...list, { name: task }]);
        setTask('');
    }};

    function handleDone(i){
        const updatedList = [...list];
        updatedList.splice(i, 1);
        console.log(i);
        setList(updatedList);
    }

    return(
        <div className="home">
            <div className="add">
                    <label>ADD NEW TASK</label>
                    <input type="text" onKeyDown={(e) => handleEnter(e)} maxLength="30" value = {task} placeholder="Type here.." onChange={(e) => {setTask(e.target.value);}}></input>
                    <button onClick={() => {handleAdd()}}>ADD</button>
            </div>
            {list.length > 0 ? (
                <div className="content">
                    {list.map((ele, ind) => (
                        <div key={ind} className="ele">
                            {ele.name}
                            <button  onClick={() => {handleDone(ind)}}>Mark as done</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="content">
                    <p>ADD YOUR FIRST TASK</p>
                </div>
            )}
        

            
        </div>
    )
}

export default Home;