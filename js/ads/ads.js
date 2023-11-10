function CursoTADS() {
  return React.createElement('main', null,
    React.createElement('h1', null, React.createElement('strong', null, 'Tecnologia em Análise e Desenvolvimento de Sistemas')),
    React.createElement('br'),
    React.createElement('em', null, 'Objetivo Geral:'),
    React.createElement('br'),
    'O curso de Análise e Desenvolvimento de Sistemas do câmpus São Paulo Pirituba tem como objetivo capacitar o egresso a atuar na área de Tecnologia de Informação (TI) em atividades como análise, projeto, desenvolvimento, gerenciamento e implantação de sistemas de informação computacionais. Essa capacitação é pautada pela valorização da prática e competências técnicas, tanto em análise quanto em desenvolvimento, e pela atualização diante da realidade tecnológica, de modo que o profissional seja um mediador competente entre o desenvolvimento tecnológico e a sociedade em que se insere.'
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(CursoTADS(), rootElement);

const tableElement = document.getElementById('table');
ReactDOM.render(React.createElement(TableData), tableElement);