import { AxiosResponse } from 'axios';
import { useForm } from 'react-hook-form';
import axiosClient from '../axios';
import {
  FormArea,
  Title,
  SubmitSuccessMessage,
  Form,
  FormLabel,
  Input,
  ButtonsArea,
} from '../styles/SampleForm';
import SubmitButton from './SubmitButton';
import BackToHomeButton from './BackToHomeButton';
import { useState } from 'react';

type AddTaskParamType = {
  title: string;
};

const SampleForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  const submitForm = async (data: any): Promise<void> => {
    const param: AddTaskParamType = {
      title: data.title,
    };

    const response: AxiosResponse<any> = await axiosClient.post(
      '/addTask',
      param
    );

    if (response.status === 200) {
      setIsSubmitSuccess(true);
    } else {
      setIsSubmitSuccess(false);
    }

    // フォームを空にする。
    reset();
  };

  return (
    <FormArea>
      <Title>基本のフォーム</Title>
      {isSubmitSuccess && (
        <SubmitSuccessMessage>
          タスクの登録が成功しました。
        </SubmitSuccessMessage>
      )}
      <Form>
        <FormLabel>タスク：</FormLabel>
        <Input
          {...register('title')}
          placeholder='ここにタスク名を入力してください'
        />
        <ButtonsArea>
          <BackToHomeButton />
          <SubmitButton onClick={handleSubmit(submitForm)} text='登録' />
        </ButtonsArea>
      </Form>
    </FormArea>
  );
};

export default SampleForm;
