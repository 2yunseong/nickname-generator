import styled from 'styled-components';

const characterCount: { [count: string]: string } = {
  2: 'two',
  3: 'three',
  4: 'four',
};

const language: { [language: string]: string } = {
  한글: 'korean',
  영어: 'english',
};

function NickNameOption() {
  return (
    <OptionSelectSection>
      <OptionWrapper>
        <OptionLabel>글자 수</OptionLabel>
        <Options>
          {Object.keys(characterCount).map((count) => (
            <>
              <RadioInput
                id={`count-${characterCount[count]}`}
                name="character-count"
                type="radio"
              />
              <Label
                shape={'circle'}
                htmlFor={`count-${characterCount[count]}`}
              >
                {count}
              </Label>
            </>
          ))}
        </Options>
      </OptionWrapper>
      <OptionWrapper>
        <OptionLabel>닉네임 옵션</OptionLabel>
        <Options>
          {Object.keys(language).map((lang) => (
            <>
              <RadioInput id={language[lang]} name="language" type="radio" />
              <Label htmlFor={language[lang]}>{lang}</Label>
            </>
          ))}
        </Options>
      </OptionWrapper>
      <OptionWrapper>
        <OptionLabel>키워드</OptionLabel>
        <SelectBox>
          <option>기본</option>
        </SelectBox>
      </OptionWrapper>
    </OptionSelectSection>
  );
}

const OptionSelectSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OptionLabel = styled.div`
  font-size: 18px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.yellow100};
`;

const Options = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const RadioInput = styled.input`
  display: none;
`;

const Label = styled.label<{ shape?: string }>`
  display: inline-block;
  cursor: pointer;
  width: ${({ shape }) => (shape === 'circle' ? '40px' : '80px')};
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.yellow100};
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  border-radius: ${({ shape }) => (shape === 'circle' ? '50%' : '8px')};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.yellow100};
  font-weight: 700;

  input[type='radio']:checked + & {
    background-color: ${({ theme }) => theme.colors.yellow100};
    color: #fff;
  }
`;

const SelectBox = styled.select`
  width: 180px;
  height: 33px;
  border: 1px solid ${({ theme }) => theme.colors.yellow100};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.yellow100};
`;

export default NickNameOption;
