import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import axiosClient from '../axios';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import {
  ListPageWrapper,
  Title,
  AlternativeText,
  ListArea,
  DeleteBtnIcon,
  BackToHomeBtnArea,
} from '../styles/List';
import { AxiosResponse } from 'axios';
import BackToHomeButton from './BackToHomeButton';

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
      id: targetId,
    };
    const response: AxiosResponse<any> = await axiosClient.post(
      '/deleteTask',
      param
    );
    console.log(response);

    if (response.status === 200) {
      const getDataResponse: AxiosResponse<any> = await axiosClient.get(
        '/getTasks'
      );
      console.log(getDataResponse);

      setList(getDataResponse.data);
    }
  };

  return (
    <ListPageWrapper>
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
                  <DeleteBtnIcon>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      onClick={() => deleteRecord(li.id)}
                    />
                  </DeleteBtnIcon>
                </li>
              </div>
            ))}
          </ul>
        )}
      </ListArea>
      <BackToHomeBtnArea>
        <BackToHomeButton />
      </BackToHomeBtnArea>
    </ListPageWrapper>
  );
};

export default List;
