import ContentsMenu from './ContentsMenu';
import { Title } from '../styles/Home';

const Home = (): JSX.Element => {
  return (
    <div>
      <Title>タスク管理</Title>
      <ContentsMenu />
    </div>
  );
};

export default Home;
