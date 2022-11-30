import { Link } from "react-router-dom";
import { MenuList, MenuButton } from '../styles/ContentsMenu';

const ContentsMenu = () => {
    return (
        <MenuList>
            <MenuButton>
                <Link to='form'>基本編</Link>
            </MenuButton>
            <MenuButton>
                <Link to='dynamicForm'>動的フォーム</Link>
            </MenuButton>
        </MenuList>
    );
};

export default ContentsMenu;