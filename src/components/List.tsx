import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

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
            {list.length === 0 ? (
                <p>登録されているタスクは0件です。</p>
            ) : (
                <ul>
                    {list.map((li: any, index: number) => (
                        <div key={index}>
                            <li key={index}>{li.title}</li>
                            <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteRecord(li.id)} />
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default List;