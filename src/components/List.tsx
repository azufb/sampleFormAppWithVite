import { useEffect, useState } from "react";
import axiosClient from "../axios";

const List = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getListFunc = async () => {
            const response = await axiosClient.get('/getTasks');
            console.log(response);

            setList(response.data);
        };

        getListFunc();
    }, []);

    return (
        <div>
            <ul>
                {list.map((li: any, index: number) => (
                    <li key={index}>{li.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;