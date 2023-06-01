import { atom } from 'recoil';
import { Option } from '../types/option';

export const options = atom<Option>({
  key: 'optionsState',
  default: {
    length: 2,
    lang: 'ko',
    keyword: 'nature',
  },
});
