import { useForm, useFieldArray } from "react-hook-form";
import axiosClient from "../axios";
import SubmitButton from "./SubmitButton";
import { Title, Form, FormLabel } from "../styles/SampleDynamicForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import '../styles/css/fontAwesomeStyle.css';

const SampleDynamicForm = () => {
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues: {
          sample: [
            {
                title: ''
            }
          ] 
        }
    });
    const { fields, prepend, append, remove, replace, swap } = useFieldArray({
        control,
        name: 'sample'
    });
    
    const onSubmit = async (data: any) => {
        const param = {
            sample: data.sample
        };

        // 複数レコード一気に登録
        const response = await axiosClient.post('/addTasks', param);
        console.log(response);

        // フォームを空にする。
        reset();
    };

    return (
        <div>
            <Title>動的フォーム</Title>
            <Form>
                <button type="button" onClick={() => prepend({title: ''})}>
                    <FontAwesomeIcon icon={faPlus} />先頭に追加
                </button>
                    {fields.map((field: any, index: number) => (
                        <div key={field.id}>
                            <FormLabel>タスクNo.{index}：</FormLabel>
                            <input {...register(`sample.${index}.title`)} />
                            <FontAwesomeIcon icon={faCircleXmark} className='removeFormIcon' onClick={() => remove(index)} />
                        </div>
                    ))}
                <button type="button" onClick={() => append({title: ''})}>
                    <FontAwesomeIcon icon={faPlus} />後ろに追加
                </button>

                <div>
                    <SubmitButton onClick={handleSubmit(onSubmit)} text='登録' />
                </div>
            </Form>
        </div>
    );
};

export default SampleDynamicForm;