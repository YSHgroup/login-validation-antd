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

  