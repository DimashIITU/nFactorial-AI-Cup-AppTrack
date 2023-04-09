import * as C from './styles';
import { Theme } from '../../components/Theme/intex';
import { useForm, FormActions } from '../../context/FormContext';
import { useEffect, useState } from 'react';
import { ReactComponent as CheckIcon } from '../../svgs/check.svg';
import { useHistory } from 'react-router-dom';
import { AI } from '../../api/ai';
import { LoaderE } from '../../components/Loader';

export const FormStep4 = () => {
  const { state, dispatch } = useForm();
  const history = useHistory();
  const [info, setInfo] = useState('');
  const [puncts, setPuncts] = useState([]);
  const [advise, setAdvise] = useState('');
  const [advisePuncts, setAdvisePuncts] = useState([]);

  useEffect(() => {
    if (state.name === '' && state.performance === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
    (async () => {
      let res = await AI.sendRequest(
        `based on this information give me advices with this puncts: the ideal sport for me, what kind of sport I should avoid, am I need keep some diet if yes what kind of, my index of body mass, some advise from you. I'm ${
          state.age
        } years old, my gender is ${state.gender}, my hight is ${state.hight}cm, my weight is ${
          state.weight
        }kg, My experience ${state.level === 0 ? 'Beginner' : 'Advanced'}, My aims ${
          state.aims
        }, It will be perfect if you can advise something similar with this performances ${
          state.performance
        }, ${state.health !== '' ? `And I have contraindications like ${state.health}` : ''}`,
      );
      setInfo(res.data.choices[0].message.content as string);
    })();
    (async () => {
      let res = await AI.sendRequest(
        `based on this information give me useful links with this puncts: the ideal sport for me, what kind of sport I should avoid, am I need keep some diet if yes what kind of, my index of body mass, some advise from you. I'm ${
          state.age
        } years old, my gender is ${state.gender}, my hight is ${state.hight}cm, my weight is ${
          state.weight
        }kg, My experience ${state.level === 0 ? 'Beginner' : 'Advanced'}, My aims ${
          state.aims
        }, It will be perfect if you can advise something similar with this performances ${
          state.performance
        }, ${state.health !== '' ? `And I have contraindications like ${state.health}` : ''}`,
      );
      setAdvise(res.data.choices[0].message.content);
    })();
  }, []);
  useEffect(() => {
    let bool = true;
    for (let i = 1; bool === true; i++) {
      const res = info.search(`${String(i)}. `);
      const resSecond = info.search(String(`${String(i + 1)}. `));

      if (res === -1) {
        bool = false;
      } else {
        setPuncts((prev) => [...prev, info.slice(res, resSecond)]);
      }
    }
  }, [info]);

  useEffect(() => {
    let bool = true;
    for (let i = 1; bool === true; i++) {
      const res = advise.search(`${String(i)}. `);
      const resSecond = advise.search(String(`${String(i + 1)}. `));

      if (res === -1) {
        bool = false;
      } else {
        setAdvisePuncts((prev) => {
          return [...prev, advise.slice(res, resSecond)];
        });
      }
    }
  }, [info]);

  return (
    <Theme>
      <C.Container>
        <h2>Congratulations</h2>
        <p>After some time we will give an answer stay on this page</p>

        <C.IconArea>
          <CheckIcon fill="rgb(91, 24, 153)" width={120} height={120} />
        </C.IconArea>
        <p className="check-email">
          {puncts.length === 0 && advise === '' ? <LoaderE /> : ''}
          {puncts.map((punct) => (
            <div>{punct}</div>
          ))}
          {advise !== '' ? <h2>Useful links for you</h2> : ''}
          {advisePuncts.map((punct) => (
            <div>{punct}</div>
          ))}
        </p>
      </C.Container>
    </Theme>
  );
};
