import styled from "styled-components";
import Logo from "./style/img/logo.png";
import banner_foto from "./style/img/banner.png";
import olhos from "./style/img/olhos.png";
import pele from "./style/img/pele.png";
import labios from "./style/img/labios.png";
import sombrancelhas from "./style/img/sombrancelhas.png";
import agendamento from "./style/img/agendamento.png";
import sobre1 from "./style/img/sobre1.png";
import sobre2 from "./style/img/sobre2.png";
import sobre3 from "./style/img/sobre3.png";
import logofooter from "./style/img/footerlogo.png";

export default function Home() {
  return (
    <>
      <PageHome>
        <Cabecalho>
          <div>
            <img src={Logo} />
          </div>
          <h1>INÍCIO</h1>
          <h1>SOBRE A CLÍNICA</h1>
          <h1>PROCEDIMENTOS</h1>
          <h1>AGENDAMENTO</h1>
          <h1>CONTATO</h1>
        </Cabecalho>
        <hr class="hr1" />

        <Banner>
          <div class="banner">
            <img src={banner_foto} />
          </div>

          <div class="pontinhos">
            <div class="ponto">.</div>
            <div class="ponto"></div>
            <div class="ponto"></div>
          </div>
        </Banner>

        <SobreAClinica>
          <div class="sobreAClinica">
            <h1>SOBRE A CLÍNICA</h1>
            <p>
              A Dany Ciriaco é uma clínica de estética que está em constante
              crescimento desde 2019, proporcionando aos seus clientes saúde,
              satisfação e bem estar. Se encontra em um dos melhores pontos de
              Belo Horizonte, próxima à Praça da Liberdade. Clique no botão e
              conheça um pouco mais sobre.
            </p>
            <button>Tour 360°</button>
          </div>
          <div class="imagens">
            <div class="primeiraColuna">
              <img class="sobre1" src={sobre1} />
              <div class="cor"></div>
            </div>
            <div class="segundaColuna">
              <img class="sobre2" src={sobre2} />
              <img class="sobre3" src={sobre3} />
            </div>
          </div>
        </SobreAClinica>

        <Procedimentos>
          <h1>Procedimentos</h1>
          <scroll>
            <div>
              <img src={labios} />
              <p>Lábios</p>
              <button>+ MAIS DETALHES</button>
            </div>
            <div>
              <img src={pele} />
              <p>Pele</p>
              <button>+ MAIS DETALHES</button>
            </div>
            <div>
              <img src={sombrancelhas} />
              <p>Sombrancelhas</p>
              <button>+ MAIS DETALHES</button>
            </div>
            <div>
              <img src={olhos} />
              <p>Olhos</p>
              <button>+ MAIS DETALHES</button>
            </div>
          </scroll>
        </Procedimentos>

        <Agendamento>
          <div class="card">
            <div class="inCard">
              <img src=""/>
              <h1>DÚVIDAS</h1>
              <p>
                Se você tem dúvidas com relação a qualquer tratamento,
                equipamento, agendamento, pagamento, clique no botão abaixo.
              </p>
            </div>
            <button>PERGUNTAR</button>
          </div>

          <div class="card">
            <div class="inCard">
              <img src={agendamento} />
              <h1>AGENDAMENTO</h1>
              <p>
                Se você tem dúvidas com relação a qualquer tratamento,
                equipamento, agendamento, pagamento, clique no botão abaixo.
              </p>
            </div>
            <button>AGENDAR</button>
          </div>

          <div class="card">
            <div class="inCard">
              <img src="" />
              <h1>ONDE ESTAMOS</h1>
              <p>
                A clínica se encontra em um dos melhores pontos de Belo
                Horizonte, próxima à Praça da Liberdade. Para saber a
                localização exata clique no botão abaixo.
              </p>
            </div>
            <button>LOCALIZAR</button>
          </div>
        </Agendamento>

        <Footer>
          <div class="logo">
            <img src={logofooter} />
          </div>
          <div>
            <h1>Fale Conosco</h1>
            <p>Atendimento</p>
            <p>Dúvidas</p>
            <p>Agendamento</p>
          </div>
          <div>
            <h1>Contato</h1>
            <p>(31) 9 9136-0603</p>
            <p>dani.ciriaco@gmail.com</p>
          </div>
          <div>
            <h1>Localização</h1>
            <p>
              Rua da Bahia, Bairro Lourdes, 1900, sl 1501 - Belo Horizonte,
              Minas Gerais
            </p>
            <p>
              Horário de Funcionamento Terça a Sexta de 9h às 18hrs Sábados de
              9h às 13hrs
            </p>
          </div>
        </Footer>
      </PageHome>
    </>
  );
}

const PageHome = styled.div`
  display: flex;
  flex-direction: column;

  hr {
    margin: 0 0 33px 0;
  }

  .hr1 {
    border: 0;
    border-top: 6px solid #55154c;
  }

  h1 {
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #55154c;
  }
  p {
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;

    color: #656162;
  }
`;

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 113px;

  div {
    margin-left: 52px;
    margin-right: 85px;
    width: 273px;
  }
  h1 {
    margin-right: 93px;
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */

    color: #55154c;
  }
  img {
    width: 273px;
  }
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .banner {
    width: 1336px;
    height: 418px;
    background-color: #fdfdb5;
  }

  .pontinhos {
    display: flex;
    flex-direction: row;
    width: 94px;
    justify-content: space-between;
  }
  .ponto {
    clip-path: ellipse(20px 50px);
  }
`;

const SobreAClinica = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0ebef;
  padding-top: 46px;
  padding-bottom: 62px;
  padding-left: 87px;
  padding-right: 87px;
  .sobreAClinica {
    display: flex;
    flex-direction: column;
    width: 474px;
    margin-right: 44px;
  }
  h1 {
    font-family: "Asap";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 55px;

    color: #55154c;
  }

  p {
    margin-top: 56px;
    margin-bottom: 51px;
  }

  button {
    background-color: #55154c;

    width: 254px;
    height: 51px;
    border-radius: 93px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    color: #ffffff;
  }
  .imagens {
    display: flex;
    flex-direction: row;
  }
  .primeiraColuna {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
  }
  .sobre1 {
    width: 388px;
    height: 235px;
    margin-bottom: 17px;
  }
  .cor {
    width: 388px;
    height: 165px;
    border-radius: 20px;
  }

  .segundaColuna {
    display: flex;
    flex-direction: column;
  }
  .sobre2 {
    width: 388px;
    height: 165px;
    border-radius: 20px;
    margin-bottom: 17px;
  }
  .sobre3 {
    width: 388px;
    height: 235px;
    border-radius: 20px;
  }
`;

const Procedimentos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 42px;

  h1 {
    margin-bottom: 25px;
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 55px;
    text-align: center;

    color: #55154c;
  }

  scroll {
    display: flex;
    flex-direction: row;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 306px;
    height: 390px;
    background-color: #55154c;
    margin-right: 37px;
    border-radius: 20px;
  }

  button {
    display: flex;
    justify-content: center;
    width: 174px;
    height: 33px;
    border-radius: 93px;
    background-color: #926b8c;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
  img {
    margin-top: 20px;
    margin-bottom: 16px;
    width: 262px;
    height: 261px;
  }
  p {
    margin-bottom: 11px;
  }
`;

const Agendamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0ebef;
  padding-top: 27px;
  padding-bottom: 36px;
  padding-left: 52px;
  padding-right: 52px;
  .card {
    margin-right: 55px;
    background-color: #f0ebef;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 407px;
    height: 318px;
  }
  .inCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: #ffffff;
  }
  img {
    margin-top: 17px;
    margin-bottom: 15px;
    width: 63px;
    height: 63px;
  }
  h1 {
    font-family: "Asap";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 37px;
    text-align: center;

    color: #55154c;
  }

  p {
    margin-left: 18px;
    margin-right: 17px;
    margin-bottom: 23px;
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: justify;

    color: #888888;
  }

  button {
    justify-content: center;
    width: 174px;
    margin-top: 14px;
    background-color: #55154c;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #ffffff;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #55154c;
  height: 372px;

  div {
    margin-right: 90px;
    width: 240px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .logo {
    width: 426px;
  }
  h1 {
    font-family: "Asap";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    /* identical to box height */

    color: #ffffff;
  }

  p {
    font-family: "Asap";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 34px;

    color: #ffffff;
  }
`;
