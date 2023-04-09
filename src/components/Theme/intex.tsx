import * as C from './styles';
import { ReactNode } from 'react';
import { Header } from '../Header';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../context/FormContext';

type Props = {
  children: ReactNode;
};

export const Theme = ({ children }: Props) => {
  const { state } = useForm();
  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            <SidebarItem
              title="General"
              description="Your general information"
              icon="profile"
              path="/"
              active={state.currentStep === 1}
            />

            <SidebarItem
              title="Personal"
              description="Your personal information"
              icon="book"
              path="/step2"
              active={state.currentStep === 2}
            />

            <SidebarItem
              title="Personal recommendations"
              description="Your performances"
              icon="mail"
              path="/step3"
              active={state.currentStep === 3}
            />
            <SidebarItem
              title="Conclusion"
              description="Our recommendations"
              icon="check"
              path="/step4"
              active={state.currentStep === 4}
            />
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};
