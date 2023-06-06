import styled from 'styled-components';
import { ReactComponent as WootecoLogo } from '../asset/wooteco-logo.svg';
import userDefault from '../asset/user-default.svg';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { selectNickname } from '../atom/selectNickname';
import { useNavigate } from 'react-router-dom';
import { options } from '../atom/options';

const Crew = {
  generation: 5,
  startDate: '07 FEB 2023',
};

export default function ResultPage() {
  const { generation, startDate } = Crew;
  const [nickname, setNickname] = useRecoilState(selectNickname);
  const resetOption = useResetRecoilState(options);

  const navigate = useNavigate();

  const restart = () => {
    resetOption();
    setNickname('');
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>마음에 드시나요?</Title>
      <SubTitle>출입증을 친구에게 자랑해봐요!</SubTitle>
      <ImageWrapper>
        <PassCard>
          <CrewInfo>
            <Nickname>{nickname}</Nickname>
            <Generation>우아한테크코스 {generation}기</Generation>
            <StartDate>{startDate}</StartDate>
          </CrewInfo>
          <CrewImage src={userDefault} alt='닉네임 사진' />
          <WootecoLogo />
        </PassCard>
      </ImageWrapper>
      <ButtonWrapper>
        <GenerateButton onClick={restart}>다시하기</GenerateButton>
        <GenerateButton>친구에게 자랑하기</GenerateButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  padding: 39px 40px 60px 40px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: #ffd600;
  font-size: 30px;
  width: fit-content;
`;
const SubTitle = styled.h2`
  color: #fae15f;
  font-size: 15px;
  width: fit-content;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PassCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 259px;
  height: 351px;
  padding: 14px 12px 12px;
  margin-bottom: 60px;

  border: 1px solid #0000004d;
  border-radius: 12px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.3);
`;

const CrewInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const Nickname = styled.div`
  height: 38px;
  font-family: BMDOHYEON;
  font-size: 30px;
`;

const Generation = styled.div`
  height: 16px;
  font-family: BMJUA;
  font-size: 12px;
`;

const StartDate = styled.div`
  font-family: BMJUA;
  font-size: 8px;
`;

const CrewImage = styled.img`
  align-self: flex-end;
  max-height: 200px;
`;
