import { Link } from "react-router-dom";
import { MenuList, MenuButton } from '../styles/ContentsMenu';

const ContentsMenu = () => {
    return (
        <MenuList>
            <div>
                <MenuButton>
                    <Link to='form'>基本編</Link>
                </MenuButton>
            </div>
            <div>
                <MenuButton>
                    <Link to='dynamicForm'>動的フォーム</Link>
                </MenuButton>
            </div>
            <div>
                <MenuButton>
                    <Link to='list'>リスト</Link>
                </MenuButton>
            </div>
        </MenuList>
    );
};

export default ContentsMenu;