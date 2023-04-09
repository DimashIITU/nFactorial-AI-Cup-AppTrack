import * as C from './styles';
import { Theme } from '../../components/Theme/intex';
import { Link, useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../context/FormContext';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
  const { state, dispatch } = useForm();
  const history = useHistory();

  const handleNextStep = () => {
    if (state.performance !== '' && state.aims !== '' && state.health !== '') {
      history.push('/step4');
    } else {
      alert(' Please fill correctly ');
    }
  };

  const handleHealthChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: FormActions.setHealth,
      payload: e.target.value,
    });
  };

  const handleAimsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: FormActions.setAims,
      payload: e.target.value,
    });
  };

  const handlePerformanceChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: FormActions.setPerformance,
      payload: e.target.value,
    });
  };

  useEffect(() => {
    if (state.gender === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  return (
    <Theme>
      <C.Container>
        <p className="passo">Step 3/3</p>
        <h2>{state.name}, if you have any diseases or contraindications, please write about it?</h2>
        <p>this is necessary in order not to recommend something that can harm you</p>

        <label htmlFor="t1">Сontraindications</label>
        <textarea id="t1" onChange={handleHealthChange}></textarea>

        <h2>The main aim of your training</h2>

        <label htmlFor="t2">Aim</label>
        <textarea id="t2" onChange={handleAimsChange}></textarea>

        <h2>Your own performance</h2>
        <p>This will help us choose the best sport that will motivate you.</p>

        <label htmlFor="t3">Performance</label>
        <textarea id="t3" onChange={handlePerformanceChange}></textarea>

        <div>
          <Link to="/step2">Previous step</Link>
          <button onClick={handleNextStep}>Finish</button>
        </div>
      </C.Container>
    </Theme>
  );
};
