import { useForm, useFieldArray } from 'react-hook-form';
import axiosClient from '../axios';
import SubmitButton from './SubmitButton';
import {
  FormArea,
  Title,
  SubmitSuccessMessage,
  Form,
  PrependBtn,
  EachFormArea,
  FormLabel,
  InputArea,
  Input,
  AppendBtn,
  ButtonsArea,
} from '../styles/SampleDynamicForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/fontAwesomeStyle.css';
import { AxiosResponse } from 'axios';
import BackToHomeButton from './BackToHomeButton';
import { useState } from 'react';

type AddTasksParamType = {
  sample: string;
};

const SampleDynamicForm = (): JSX.Element => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: {
      sample: [
        {
          title: '',
        },
      ],
    },
  });
  const { fields, prepend, append, remove } = useFieldArray({
    control,
    name: 'sample',
  });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>(false);

  const onSubmit = async (data: any): Promise<void> => {
    const param: AddTasksParamType = {
      sample: data.sample,
    };

    // 複数レコード一気に登録
    const response: AxiosResponse<any> = await axiosClient.post(
      '/addTasks',
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
      <Title>動的フォーム</Title>
      {isSubmitSuccess && (
        <SubmitSuccessMessage>
          タスクの登録が成功しました。
        </SubmitSuccessMessage>
      )}
      <Form>
        <PrependBtn type='button' onClick={() => prepend({ title: '' })}>
          <FontAwesomeIcon icon={faPlus} />
          先頭に追加
        </PrependBtn>
        {fields.map((field: any, index: number) => (
          <EachFormArea key={field.id}>
            <FormLabel>タスクNo.{index}：</FormLabel>
            <InputArea>
              <Input
                {...register(`sample.${index}.title`)}
                placeholder='ここにタスク名を入力してください'
              />
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='removeFormIcon'
                onClick={() => remove(index)}
              />
            </InputArea>
          </EachFormArea>
        ))}
        <AppendBtn type='button' onClick={() => append({ title: '' })}>
          <FontAwesomeIcon icon={faPlus} />
          後ろに追加
        </AppendBtn>

        <ButtonsArea>
          <BackToHomeButton />
          <SubmitButton onClick={handleSubmit(onSubmit)} text='登録' />
        </ButtonsArea>
      </Form>
    </FormArea>
  );
};

export default SampleDynamicForm;
