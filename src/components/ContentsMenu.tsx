import { Link } from "react-router-dom";

const ContentsMenu = () => {
    return (
        <div>
            <Link to='form'>基本編</Link>
            <Link to='dynamicForm'>動的フォーム</Link>
        </div>
    );
};

export default ContentsMenu;