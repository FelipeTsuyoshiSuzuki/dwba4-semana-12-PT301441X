class DynamicTable extends React.Component {
  render() {
    const { data } = this.props;

    return React.createElement('table', { className: 'custom-table' },
      React.createElement('thead', null,
        React.createElement('tr', null,
          React.createElement('th', null, 'Disciplina'),
          React.createElement('th', null, 'Carga'),
          React.createElement('th', null, 'Periodo')
        )
      ),
      React.createElement('tbody', null,
        data.map((item, index) => (
          React.createElement('tr', { key: index },
            React.createElement('td', null, item.disciplina),
            React.createElement('td', null, item.carga),
            React.createElement('td', null, item.periodo)
          )
        ))
      )
    );
  }
}