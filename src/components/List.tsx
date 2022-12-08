import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import axiosClient from "../axios";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Title, AlternativeText, ListArea } from "../styles/List";
import { AxiosResponse } from "axios";

type DeleteRecordParamType = {
    id: number;
};

const List = () => {
    const [list, setList] = useState<any[]>([]);

    useEffect(() => {
        const getListFunc = async (): Promise<void> => {
            const response: AxiosResponse<any> = await axiosClient.get('/getTasks');
            console.log(response);

            setList(response.data);
        };

        getListFunc();
    }, []);

    const deleteRecord = async (targetId: number): Promise<void> => {
        const param: DeleteRecordParamType = {
            id: targetId
        }
        const response: AxiosResponse<any> = await axiosClient.post('/deleteTask', param);
        console.log(response);
        
        if (response.status === 200) {
            const getDataResponse: AxiosResponse<any> = await axiosClient.get('/getTasks');
            console.log(getDataResponse);

            setList(getDataResponse.data);
        }
    };

    return (
        <div>
            <Title>一覧</Title>
            <ListArea>
                {list.length === 0 ? (
                    <AlternativeText>登録されているタスクは0件です。</AlternativeText>
                ) : (
                        <ul>
                            {list.map((li: any, index: number) => (
                                <div key={index}>
                                    <li key={index}>
                                        {li.title}
                                        <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteRecord(li.id)} />
                                    </li>
                                </div>
                            ))}
                        </ul>
                )}
            </ListArea>
        </div>
    );
};

export default List;