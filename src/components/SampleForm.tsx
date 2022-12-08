import { AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import axiosClient from "../axios";
import { FormArea,Title, Form, FormLabel, Input, ButtonsArea } from '../styles/SampleForm';
import SubmitButton from "./SubmitButton";
import BackToHomeButton from './BackToHomeButton';

type AddTaskParamType = {
    title: string;
};

const SampleForm = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const watchAllVal = watch(); // 入力欄全部を監視

    const submitForm = async (data: any): Promise<void> => {
        const param: AddTaskParamType = {
            title: data.title
        };

        const response: AxiosResponse<any> = await axiosClient.post('/addTask', param);

        console.log(response);

        // フォームを空にする。
        reset();
    };

    return (
        <FormArea>
            <Title>基本のフォーム</Title>
            <Form>
                <FormLabel>タスク：</FormLabel>
                <Input {...register('title')} placeholder='ここにタスク名を入力してください' />
                <ButtonsArea>
                    <BackToHomeButton />
                    <SubmitButton onClick={handleSubmit(submitForm)} text='登録' />
                </ButtonsArea>
            </Form>
            {/*
                <form>
                    <label>ラベル：</label>
                    <input {...register('title', { pattern: /[A-Za-z]/ })} />
                    {errors.label && <span>文字を入力してください！</span>}

                    <label>ラベル：</label>
                    <select {...register('select', { required: true })}>
                        <option defaultChecked>選択してください</option>
                        <option value='aaa'>aaa</option>
                        <option value='bbb'>bbb</option>
                        <option value='ccc'>ccc</option>
                    </select>
                    {errors.select && <span>どれか1つ以上チェックを入れてください！</span>}
                    
                    <label>ラベル：</label>
                    <input type='checkbox' value='aaa' {...register('checkbox')} />aaa
                    <input type='checkbox' value='bbb' {...register('checkbox')} />bbb
                    <input type='checkbox' value='ccc' {...register('checkbox')} />ccc

                    <label>ラベル：</label>
                    <div radioGroup="rg">
                        <input type='radio' value='yes' {...register('rg')} defaultChecked />YES
                        <input type='radio' value='no' {...register('rg')} />NO
                    </div>

                    <label>ラベル：</label>
                    <textarea {...register('textarea', { pattern: /[A-Za-z]/ })} />
                    {errors.textarea && <span>文字を入力してください！</span>}

                    <input type='submit' onClick={handleSubmit(submitForm)} />
                </form>
                <div>
                    <p>label：{watchAllVal.label}</p>
                    <p>select：{watchAllVal.select}</p>
                    <p>checkbox：{watchAllVal.checkbox}</p>
                    <p>radio：{watchAllVal.rg}</p>
                    <p>textarea：{watchAllVal.textarea}</p>
                </div>
            */}
        </FormArea>
    );
};

export default SampleForm;