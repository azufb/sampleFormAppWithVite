import { useForm } from "react-hook-form";

const SampleForm = () => {
    const { register, handleSubmit } = useForm();

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
                    <option>選択してください</option>
                    <option value='aaa'>aaa</option>
                    <option value='bbb'>bbb</option>
                    <option value='ccc'>ccc</option>
                </select>
                <label>ラベル：</label>
                <input type='checkbox' value='aaa' {...register('checkbox')} />aaa
                <input type='checkbox' value='bbb' {...register('checkbox')} />bbb
                <input type='checkbox' value='ccc' {...register('checkbox')} />ccc

                <label>ラベル：</label>
                <input type='radio' value='girl' {...register('radio')} checked />Girl
                <input type='radio' value='boy' {...register('radio')} />Boy

                <label>ラベル：</label>
                <textarea {...register('textarea')} />

                <input type='submit' onClick={handleSubmit(submitForm)} />
            </form>
        </div>
    );
};

export default SampleForm;