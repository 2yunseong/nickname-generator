import styled from 'styled-components';
import { ReactComponent as ClosedBox } from '../asset/closed-box.svg';
import NickNameOption from '../components/MainPage/NickNameOption';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { options as optionState } from '../atom/options';

export default function MainPage() {
  const [options, setOptions] = useRecoilState(optionState);
  const navigate = useNavigate();

  const onGenerateNickname = () => {
    navigate(`/confirm`);
  };
  return (
    <Wrapper>
      <Title>닉네임 랜덤박스</Title>
      <Description>박스를 열어 랜덤 닉네임을 확인하세요.</Description>
      <ImageWrapper>
        <ClosedBox />
      </ImageWrapper>
      <NickNameOption options={options} setOptions={setOptions} />
      <GenerateButton onClick={onGenerateNickname}>
        박스열고 확인하기
      </GenerateButton>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  height: 100%;
  padding: 39px 40px 60px 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  flex: 0 0 54px;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  color: ${({ theme }) => theme.colors.yellow100};
`;

const Description = styled.p`
  flex: 0 0 20px;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.yellow200};
`;

const ImageWrapper = styled.div`
  flex: 0 0 360px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenerateButton = styled.button`
  flex: 0 0 61px;
  width: 280px;
  justify-self: flex-end;
  background: ${({ theme }) => theme.colors.yellow300};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 15px;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
