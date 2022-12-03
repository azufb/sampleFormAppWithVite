import { useEffect, useState } from "react";
import axiosClient from "../axios";

const List = () => {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const getListFunc = async () => {
            const response = await axiosClient.get('/getTasks');
            console.log(response);

            setList(response.data);
        };

        getListFunc();
    }, []);

    const deleteRecord = async (targetId: number) => {
        const param = {
            id: targetId
        }
        const response = await axiosClient.post('/deleteTask', param);
        console.log(response);
        
        if (response.status === 200) {
            const getDataResponse = await axiosClient.get('/getTasks');
            console.log(getDataResponse);

            setList(getDataResponse.data);
        }
    };

    return (
        <div>
            <ul>
                {list.map((li: any, index: number) => (
                    <div key={index}>
                        <li key={index}>{li.title}</li>
                        <button onClick={() => deleteRecord(li.id)}>削除</button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default List;