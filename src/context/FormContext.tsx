import { createContext, ReactNode, useContext, useReducer } from 'react';

type State = {
  currentStep: number;
  name: string;
  age: number;
  hight: number;
  weight: number;
  gender: 'Male' | 'Female' | '';
  aims: string;
  health: string;
  performance: string;
  level: 0 | 1;
};

type Action = {
  type: FormActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type FormProviderProps = {
  children: ReactNode;
};

const initialData: State = {
  currentStep: 0,
  name: '',
  age: 0,
  hight: 0,
  weight: 0,
  gender: '',
  aims: '',
  health: '',
  performance: '',
  level: 0,
};

// Context API
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
  setCurrentStep,
  setName,
  setAge,
  setHight,
  setWeight,
  setHealth,
  setGender,
  setAims,
  setMode,
  setPerformance,
  setLevel,
  setEmail,
  setGithub,
}

const formReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setAge:
      return { ...state, age: action.payload };
    case FormActions.setHight:
      return { ...state, hight: action.payload };
    case FormActions.setWeight:
      return { ...state, weight: action.payload };
    case FormActions.setGender:
      return { ...state, gender: action.payload };
    case FormActions.setHealth:
      return { ...state, health: action.payload };
    case FormActions.setAims:
      return { ...state, aims: action.payload };
    case FormActions.setMode:
      return { ...state, mode: action.payload };
    case FormActions.setPerformance:
      return { ...state, performance: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    default:
      return state;
  }
};

// Provider
export const FormProvider = ({ children }: FormProviderProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// Hooks Context
export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm precisa ser usado dentro do FormProvider');
  }
  return context;
};
