import {useState,useEffect} from "react";
import axios from "axios";
const TodoApi = () => {
    let [todo, setTodo] = useState([]);
    useEffect(() =>{
        axios.get("https://gorest.co.in/public/v2/todos")
        .then((res) => {
            setTodo(res.data);
        });
    },[]);
    return(
        <div className="App-cat">
            <div className="divTwo">
            <h1>Table Details</h1>
                <table>
                    <tr>
                        <td><b>Serial No</b></td>
                        <td><b>ID</b></td>
                        <td><b>User ID</b></td>
                        <td><b>Title</b></td>
                        <td><b>Due on</b></td>
                        <td><b>Status</b></td>
                    </tr>
                    {todo.map((val, index) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{val.id}</td>
                                <td>{val.user_id}</td>
                                <td>{val.title}</td>
                                <td>{val.due_on}</td>
                                <td>{val.status}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    )
}
export default TodoApi;