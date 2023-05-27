import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface NicknameProps {
  nickname: string;
  selectedNickname: string;
  setSelectedNickname: Dispatch<SetStateAction<string>>;
}

export default function Nickname({
  nickname,
  selectedNickname,
  setSelectedNickname,
}: NicknameProps) {
  const isSelected = nickname === selectedNickname;
  const onClick = () => {
    setSelectedNickname(nickname);
  };
  return (
    <Content isSelected={isSelected} onClick={onClick}>
      {nickname}
    </Content>
  );
}

const Content = styled.div<{ isSelected: boolean }>`
  font-size: 20px;
  color: ${(props) => (props.isSelected ? '#FDE982' : '#EDE5BC')};
  cursor: pointer;
`;
