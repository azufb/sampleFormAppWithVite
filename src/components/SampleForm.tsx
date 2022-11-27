import { useForm } from "react-hook-form";

const SampleForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const watchAllVal = watch(); // 入力欄全部を監視

    const submitForm = (data: any): void => {
        console.log(data);
    };

    return (
        <div>
            <p>一般的なフォーム</p>
            <form>
                <label>ラベル：</label>
                <input {...register('label', { pattern: /a-zA-Z/ })} />
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
                <textarea {...register('textarea', { pattern: /a-zA-Z/ })} />
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
        </div>
    );
};

export default SampleForm;