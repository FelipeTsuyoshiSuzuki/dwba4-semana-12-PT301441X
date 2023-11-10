class TableData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [
        { disciplina: 'Sistema Operacionais', carga: '66.7', periodo: 'Noturno' },
        { disciplina: 'Inglês', carga: '8', periodo: '33.3', periodo: 'Noturno' },
        { disciplina: 'Sistema Operacionais', carga: '33.3', periodo: 'Noturno' },
        { disciplina: 'Inglês', carga: '8', periodo: '66.7', periodo: 'Noturno' },
      ],
    };
  }

  render() {
    return React.createElement('div', null,
      React.createElement('h1', null, 'Sua Aplicação React'),
      React.createElement(DynamicTable, { data: this.state.tableData })
    );
  }
}