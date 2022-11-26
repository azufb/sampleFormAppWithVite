import { useForm } from "react-hook-form";

const SampleForm = () => {
    const { register, handleSubmit, watch } = useForm();

    const watchAllVal = watch();

    const submitForm = (data: any): void => {
        console.log(data);
    };

    return (
        <div>
            <p>一般的なフォーム</p>
            <form>
                <label>ラベル：</label>
                <input {...register('label')} />
                <label>ラベル：</label>
                <select {...register('select')}>
                    <option defaultChecked>選択してください</option>
                    <option value='aaa'>aaa</option>
                    <option value='bbb'>bbb</option>
                    <option value='ccc'>ccc</option>
                </select>
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
                <textarea {...register('textarea')} />

                <input type='submit' onClick={handleSubmit(submitForm)} />
            </form>
            <div>
                <p>label：{watchAllVal.label}</p>
                <p>select：{watchAllVal.select}</p>
                <p>checkbox：{watchAllVal.checkbox}</p>
                <p>radio：{watchAllVal.rg}</p>
                <p>textarea：{watchAllVal.textarea}</p>
            </div>
        </div>
    );
};

export default SampleForm;