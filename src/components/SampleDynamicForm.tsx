import { useForm, useFieldArray } from "react-hook-form";
import axiosClient from "../axios";

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
            <p>動的フォーム</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <button type="button" onClick={() => prepend({title: ''})}>先頭に追加</button>
                    {fields.map((field: any, index: number) => (
                        <div key={field.id}>
                            <label>タスク：{index}</label>
                            <input {...register(`sample.${index}.title`)} />
                            <button type="button" onClick={() => remove(index)}>消去</button>
                        </div>
                    ))}
                <button type="button" onClick={() => append({title: ''})}>後ろに追加</button>

                <button type="submit">登録</button>
            </form>
        </div>
    );
};

export default SampleDynamicForm;