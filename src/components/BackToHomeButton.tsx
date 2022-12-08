import { useNavigate } from "react-router-dom";
import { BackToHomeBtn } from "../styles/BackToHomeButton";

const BackToHomeButton = () => {
    const navigate = useNavigate();

    const backToHome = (): void => {
        navigate('/');
    };

    return (
        <BackToHomeBtn onClick={backToHome}>ホームに戻る</BackToHomeBtn>
    );
};

export default BackToHomeButton;