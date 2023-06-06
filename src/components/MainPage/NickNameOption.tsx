import { ChangeEvent, Dispatch, Fragment, SetStateAction } from 'react';
import styled from 'styled-components';
import type { NickNameLanguage, NickNameKeyword, Option } from '../../types/option';

const characterCount: { [count: string]: string } = {
  2: 'two',
  3: 'three',
  4: 'four',
};

const lang: { [language: string]: NickNameLanguage } = {
  한글: 'ko',
  영어: 'en',
};

const keywords: { [keyword: string]: NickNameKeyword } = {
  자연: 'nature',
  우테코: 'wooteco',
  동물: 'animal',
};

interface NickNameOptionProps {
  options: Option;
  setOptions: Dispatch<SetStateAction<Option>>;
}

function NickNameOption({ options, setOptions }: NickNameOptionProps) {
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const newValue = e.target.name === 'length' ? Number(e.target.value) : e.target.value;

    setOptions((prev) => ({ ...prev, [e.target.name]: newValue }));
  };

  return (
    <OptionSelectSection>
      <OptionWrapper>
        <OptionLabel>글자 수</OptionLabel>
        <Options>
          {Object.keys(characterCount).map((count, index) => (
            <Fragment key={index}>
              <RadioInput
                id={`count-${characterCount[count]}`}
                name='length'
                type='radio'
                value={count}
                onChange={handleChangeInput}
              />
              <Label shape={'circle'} htmlFor={`count-${characterCount[count]}`}>
                {count}
              </Label>
            </Fragment>
          ))}
        </Options>
      </OptionWrapper>
      <OptionWrapper>
        <OptionLabel>닉네임 옵션</OptionLabel>
        <Options>
          {Object.keys(lang).map((unit) => (
            <Fragment key={unit}>
              <RadioInput id={lang[unit]} name='lang' type='radio' value={lang[unit]} onChange={handleChangeInput} />
              <Label htmlFor={lang[unit]}>{unit}</Label>
            </Fragment>
          ))}
        </Options>
      </OptionWrapper>
      <OptionWrapper>
        <OptionLabel>키워드</OptionLabel>
        <SelectBox name='keyword' onChange={handleChangeInput}>
          {Object.keys(keywords).map((keyword, index) => (
            <option key={index} value={keywords[keyword]}>
              {keyword}
            </option>
          ))}
        </SelectBox>
      </OptionWrapper>
    </OptionSelectSection>
  );
}

const OptionSelectSection = styled.div`
  flex: 0 0 206px;
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
