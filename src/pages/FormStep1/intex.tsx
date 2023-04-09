import * as C from './styles';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../context/FormContext';
import { Theme } from '../../components/Theme/intex';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };
  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setAge,
      payload: e.target.value,
    });
  };
  const handleHightChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setHight,
      payload: e.target.value,
    });
  };
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setWeight,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.name !== '' && state.age !== 0 && state.hight !== 0 && state.weight !== 0) {
      history.push('/step2');
    } else {
      alert('Please fill correctly');
    }
  };

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  return (
    <Theme>
      <C.Container>
        <p className="passo">Step 1/3</p>
        <h2>Your general information</h2>
        <p>For a better understanding of your condition, answer these questions</p>

        <label>Your name</label>
        <input type="text" autoFocus onChange={handleNameChange} />

        <label>Your age</label>
        <input type="text" onChange={handleAgeChange} />
        <label>Your hight</label>
        <input type="text" onChange={handleHightChange} />
        <label>Your weight</label>
        <input type="text" onChange={handleWeightChange} />

        <button onClick={handleNextStep}>Next step</button>
      </C.Container>
    </Theme>
  );
};
