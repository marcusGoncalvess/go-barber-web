import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Calender,
  Section,
  Appointment,
} from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>

          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/57052394?s=460&u=dea13ca8a9e444d334e43175f42c296cb700a6ad&v=4"
                alt="Marcus"
              />

              <strong>Marcus Gonçalves</strong>
              <span>
                <FiClock />
                17:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/57052394?s=460&u=dea13ca8a9e444d334e43175f42c296cb700a6ad&v=4"
                  alt="Marcus"
                />
                <strong>Marcus Gonçalves</strong>
              </div>
            </Appointment>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/57052394?s=460&u=dea13ca8a9e444d334e43175f42c296cb700a6ad&v=4"
                  alt="Marcus"
                />
                <strong>Marcus Gonçalves</strong>
              </div>
            </Appointment>
          </Section>

          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/57052394?s=460&u=dea13ca8a9e444d334e43175f42c296cb700a6ad&v=4"
                  alt="Marcus"
                />
                <strong>Marcus Gonçalves</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>

        <Calender />
      </Content>
    </Container>
  );
};

export default Dashboard;
