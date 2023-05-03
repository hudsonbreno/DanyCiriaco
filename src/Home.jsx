import styled from "styled-components";

export default function Home() {
  return (
    <>
      <PageHome>
        <Cabecalho>
          <img src="" />
          <h1>INÍCIO</h1>
          <h1>SOBRE A CLÍNICA</h1>
          <h1>PROCEDIMENTOS</h1>
          <h1>AGENDAMENTO</h1>
          <h1>CONTATO</h1>
        </Cabecalho>

        <Banner>
          <img src="" />
          <img src="" />
          <img src="" />
        </Banner>

        <SobreAClinica>
          <h1>SOBRE A CLÍNICA</h1>
          <p>
            A Dany Ciriaco é uma clínica de estética que está em constante
            crescimento desde 2019, proporcionando aos seus clientes saúde,
            satisfação e bem estar. Se encontra em um dos melhores pontos de
            Belo Horizonte, próxima à Praça da Liberdade. Clique no botão e
            conheça um pouco mais sobre.
          </p>
          <button>Tour 360°</button>
        </SobreAClinica>

        <Procedimentos>
          <div>
            <img src="" />
            <p>Lábios</p>
            <button>+ Mais detalhes</button>
          </div>
          <div>
            <img src="" />
            <p>Pele</p>
            <button>+ Mais detalhes</button>
          </div>
          <div>
            <img src="" />
            <p>Sombrancelhas</p>
            <button>+ Mais detalhes</button>
          </div>
          <div>
            <img src="" />
            <p>Olhos</p>
            <button>+ Mais detalhes</button>
          </div>
        </Procedimentos>

        <Agendamento>
          <div>
            <img src="" />
            <h1>DÚVIDAS</h1>
            <p>
              Se você tem dúvidas com relação a qualquer tratamento,
              equipamento, agendamento, pagamento, clique no botão abaixo.
            </p>
            <button>PERGUNTAR</button>
          </div>

          <div>
            <img src="" />
            <h1>AGENDAMENTO</h1>
            <p>
              Se você tem dúvidas com relação a qualquer tratamento,
              equipamento, agendamento, pagamento, clique no botão abaixo.
            </p>
            <button>AGENDAR</button>
          </div>

          <div>
            <img src="" />
            <h1>ONDE ESTAMOS</h1>
            <p>
              A clínica se encontra em um dos melhores pontos de Belo Horizonte,
              próxima à Praça da Liberdade. Para saber a localização exata
              clique no botão abaixo.
            </p>
            <button>LOCALIZAR</button>
          </div>
        </Agendamento>

        <Footer>
          <img src="" />
          <div>
            <h1>Fale Conosco</h1>
            <p>Atendimento ao Cliente</p>
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
            <p>Rua da Bahia, Bairro Lourdes, 1900, sl 1501  - Belo Horizonte, Minas Gerais</p>
            <p>Horário de Funcionamento
Terça a Sexta de 9h às 18hrs
Sábados de 9h às 13hrs</p>
          </div>
        </Footer>
      </PageHome>
    </>
  );
}

const PageHome = styled.div`
  display: flex;
  flex-direction: column;
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
  justify-content: space-between;
`;

const Banner = styled.div`
  display: flex;
`;

const SobreAClinica = styled.div`
  display: flex;
  flex-direction: column;
`;

const Procedimentos = styled.div`
  display: flex;
`;

const Agendamento = styled.div`
  display: flex;
`;

const Footer = styled.div`
  display: flex;
`;
