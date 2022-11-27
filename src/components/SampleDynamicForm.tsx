import { useForm, useFieldArray } from "react-hook-form";

const SampleDynamicForm = () => {
    const { register, handleSubmit, control } = useForm({
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

    return (
        <div>
            <form>
            <button type="button" onClick={() => prepend({title: ''})}>先頭に追加</button>
                {fields.map((field: any, index: number) => (
                    <div key={field.id}>
                        <label>タスク：{index}</label>
                        <input {...register(`sample.${index}.title`)} />
                        <button type="button" onClick={() => remove(index)}>消去</button>
                    </div>
                ))}
                <button type="button" onClick={() => replace({title: 'You Can Do It!'})}>置き換え</button>
                <button type="button" onClick={() => append({title: ''})}>後ろに追加</button>
            </form>
        </div>
    );
};

export default SampleDynamicForm;