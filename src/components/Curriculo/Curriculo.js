import React, { Component } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js"
import Contato from "../Contato/Contato.js"
import Formacao from "../Formacao/Formacao.js"
import Experiencia from "../Experiencia/Experiencia.js"

class Curriculo extends Component {

  state = {
    curriculo: [
      {
        nome: 'Letícia A. da Silva',
        ocupacao: 'Técnica de Enfermagem',
        resumo: 'Tenho 30 anos, trabalho na área de saúde e estou em busca de transição profissional.',
        perfilProfissional: 'Trabalho como técnica de enfermagem e estou em busca de conhecimentos que possibilitem uma transição para a área de desenvolvimento web. Para tanto, estou realizando cursos pela plataforma Alura e pelo programa Women Can Code. Tem sido um desafio interessante todo esse aprendizado.',
        contatos: [
          {
            id: 1,
            tipo: 'Telefone/ WhatsApp',
            contato: '19 9 9424-1472'
          },
          {
            id: 2,
            tipo: 'E-mail',
            contato: 'ltc.lmd@gmail.com'
          },
          {
            id: 3,
            tipo: 'Linkedin',
            contato: 'https://www.linkedin.com/in/letícia-almeida-22945366'
          },
          {
            id: 4,
            tipo: 'GitHub',
            contato: 'https://github.com/leticiasl'
          }
        ],
        educacao: [
          {
            id: 1,
            instituicao: 'UNIP',
            curso: 'Psicologia - 2015'
          },
          {
            id: 2,
            instituicao: 'COTUCA',
            curso: 'Técnico de Enfermagem - 2010'
          }
        ],
        experiencia: [
          {
            id: 1,
            cargo: 'Técnica de Enfermagem',
            periodo: 'Agosto 2015',
            empresa: 'Prefeitura Municipal de Campinas',
            local: 'Campinas',
            conteudo: 'Realização de acolhimento, aplicação de medicamentos, aplicação de vacinas, realização de curativos, orientações gerais a pacientes.',
            atual: true
          },
          {
            id: 2,
            cargo: 'Técnica de Enfermagem',
            periodo: 'Novembro 2013 - Agosto 2015',
            empresa: 'Hospital Vera Cruz',
            local: 'Campinas',
            conteudo: 'Recepção de recém-nascidos, orientações aos pais quanto aos cuidados, auxilio e orientação com procedimento de amamentação, administração de medicamentos, verificação de sinais vitais.',
            atual: false
          }
        ]
      }
    ]
  }

  showCargoAtual = () => {
    this.setState(state => {
      state.curriculo[0].experiencia.map(exp => (
        exp.atual = false
      ))
    })
    this.setState({state: this.state})
  }

  render() {
    const { nome, ocupacao, resumo, perfilProfissional } = this.state.curriculo[0]
    const { contatos } = this.state.curriculo[0]
    const { educacao } = this.state.curriculo[0]
    const { experiencia } = this.state.curriculo[0]

    return (
      <main>
        <Cabecalho nome={nome} ocupacao={ocupacao} resumo={resumo} perfilProfissional={perfilProfissional} />
        <aside>
          <div className="sidebar">
            <h3>Contatos</h3>

            <div className="lista-de-contatos">
              {
                contatos.map(cont => (
                  <Contato key={cont.id} contato={cont} />
                ))
              }

            </div>
          </div>

          <div className="sidebar">
            <h3>Educação</h3>
            <div className="lista-de-formacao">
              {
                educacao.map(ed => (
                  <Formacao key={ed.id} edu={ed} />
                ))
              }
            </div>
          </div>
        </aside>
        <div className="experience">
          <h2>Experiência Profissional</h2>
          {
            experiencia.map(exp => (
              <Experiencia key={exp.id} exp={exp} />
            ))
          }
          <button onClick={this.showCargoAtual}>Mostrar atual</button>
        </div>
      </main>
    )
  }
}

export default Curriculo;
