import { useForm, useFieldArray } from "react-hook-form";
import axiosClient from "../axios";
import SubmitButton from "./SubmitButton";
import { Title, Form, FormLabel } from "../styles/SampleDynamicForm";

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
                <button type="button" onClick={() => prepend({title: ''})}>先頭に追加</button>
                    {fields.map((field: any, index: number) => (
                        <div key={field.id}>
                            <FormLabel>タスクNo.{index}：</FormLabel>
                            <input {...register(`sample.${index}.title`)} />
                            <button type="button" onClick={() => remove(index)}>消去</button>
                        </div>
                    ))}
                <button type="button" onClick={() => append({title: ''})}>後ろに追加</button>

                <SubmitButton onClick={handleSubmit(onSubmit)} text='登録' />
            </Form>
        </div>
    );
};

export default SampleDynamicForm;