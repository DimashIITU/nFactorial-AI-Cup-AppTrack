import * as C from './styles';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme/intex';
import { SelectOption } from '../../components/SelectOption';
import { useForm, FormActions } from '../../context/FormContext';
import { useEffect } from 'react';

export const FormStep2 = () => {
  const { state, dispatch } = useForm();
  const history = useHistory();

  const handleNextStep = () => {
    history.push('/step3');
  };

  useEffect(() => {
    if (state.name === '' && state.age === 0 && state.hight === 0 && state.weight === 0) {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }
  }, []);

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };
  const setGender = (level: 'Male' | 'Female') => {
    dispatch({
      type: FormActions.setGender,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p className="passo">Step 2/3</p>
        <h2>{state.name}, your level at sport?</h2>
        <p>This is necessary to find you an occupation and recommendations</p>

        <SelectOption
          title="Beginner"
          description="I played sports at school"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />

        <SelectOption
          title="Middle"
          description="I have a good experience and a general idea of sports"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />

        <h2>{state.name}, your gender?</h2>

        <SelectOption
          title="Male "
          description="I have a good experience and a general idea of sports"
          icon="♂"
          selected={state.gender === 'Male'}
          onClick={() => setGender('Male')}
        />

        <SelectOption
          title="Female"
          description="I have a good experience and a general idea of sports"
          icon="♀"
          selected={state.gender === 'Female'}
          onClick={() => setGender('Female')}
        />

        <div>
          <Link to="/">Previous step</Link>
          <button onClick={handleNextStep}>Next step</button>
        </div>
      </C.Container>
    </Theme>
  );
};
