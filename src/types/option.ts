export interface Option {
  length: NickNameLength;
  lang: NickNameLanguage;
  keyword: NickNameKeyword;
}

export type NickNameLanguage = 'ko' | 'en';

export type NickNameLength = 2 | 3 | 4;

export type NickNameKeyword = 'nature' | 'wooteco' | 'animal';
