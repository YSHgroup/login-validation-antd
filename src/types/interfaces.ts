import { UserInfoType } from '../types/type'

export interface InitialFormProps {
    continueHandle: (values: UserInfoType) => void
  }
export interface ReviewFormProps {
    finish: () => void,
    info: UserInfoType | undefined,
  }

export interface PasswordFormProps {
    continueHandle: (values:UserInfoType) => void
  }

  interface NativeName {
    por: {
        common: string
        official: string
    }
}
export interface CountryName {
    common: string
    nativeName: NativeName
    official: string
}

export interface CoutryInterface<T extends CountryName> {
    name: T
    cca2: string
}