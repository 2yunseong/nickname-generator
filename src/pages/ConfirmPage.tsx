import styled from 'styled-components';
import { Box } from '../asset';
import { useState } from 'react';
import Nickname from '../components/ConfirmPage/Nickname';
import { useFetch } from '../hooks/useFetch';
import type { NickName as NickNameType } from '../types/nickname';

export default function ConfirmPage() {
  const [selectedNickname, setSelectedNickname] = useState('');

  const onConfirmClick = () => {
    if (!selectedNickname) return;
    console.log(selectedNickname);
  };
  const {
    data: nicknames,
    isLoading,
    isError,
  } = useFetch<string[]>('../nicknames.json');

  const isSelected = selectedNickname !== '';
  if (!nicknames) {
    return <div>로딩중..</div>;
  }
  return (
    <Container>
      <Header>
        <Title>닉네임을 선택해보세요!</Title>
        <SubTitle>닉네임을 골라 출입증을 만들 수 있습니다</SubTitle>
      </Header>
      <NicknameContainer>
        {isLoading ? null : (
          <NicknameSection>
            {nicknames.slice(0, 3).map((nickname, index) => (
              <Nickname
                key={index}
                nickname={nickname}
                selectedNickname={selectedNickname}
                setSelectedNickname={setSelectedNickname}
              />
            ))}
          </NicknameSection>
        )}
        {isLoading ? null : (
          <NicknameSection>
            {nicknames.slice(3, 6).map((nickname, index) => (
              <Nickname
                key={index + 23}
                nickname={nickname}
                selectedNickname={selectedNickname}
                setSelectedNickname={setSelectedNickname}
              />
            ))}
          </NicknameSection>
        )}
        {isLoading ? null : (
          <NicknameSection>
            {nicknames.slice(6).map((nickname, index) => (
              <Nickname
                key={index + 45}
                nickname={nickname}
                selectedNickname={selectedNickname}
                setSelectedNickname={setSelectedNickname}
              />
            ))}
          </NicknameSection>
        )}
      </NicknameContainer>
      <Box />
      <ConfirmButton isSelected={isSelected} onClick={onConfirmClick}>
        출입증 만들기
      </ConfirmButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.header`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
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

const NicknameSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 58px;
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-top: 131px;
`;

const ConfirmButton = styled.button<{ isSelected: boolean }>`
  width: 75%;
  height: 60px;
  border-radius: 15px;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => (props.isSelected ? '#FDE982' : '#EDE5BC')};
  cursor: pointer;
  margin-top: 70px;
`;
