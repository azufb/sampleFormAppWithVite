const SubmitButton = (props: any) => {
    return (
        <button type='submit' onClick={props.onClick}>
            {props.text}
        </button>
    );
};

export default SubmitButton;