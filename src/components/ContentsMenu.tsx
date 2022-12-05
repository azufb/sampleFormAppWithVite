import { Link } from "react-router-dom";
import { MenuList, MenuButtonWrapDiv, MenuButton } from '../styles/ContentsMenu';

const ContentsMenu = () => {
    return (
        <MenuList>
            <MenuButtonWrapDiv>
                <MenuButton>
                    <Link to='form'>基本のフォーム</Link>
                </MenuButton>
            </MenuButtonWrapDiv>
            <MenuButtonWrapDiv>
                <MenuButton>
                    <Link to='dynamicForm'>動的フォーム</Link>
                </MenuButton>
            </MenuButtonWrapDiv>
            <MenuButtonWrapDiv>
                <MenuButton>
                    <Link to='list'>タスク一覧</Link>
                </MenuButton>
            </MenuButtonWrapDiv>
        </MenuList>
    );
};

export default ContentsMenu;