import React from 'react';
import Relay from 'react-relay';


class MebelCreateForm extends React.Component {
  componentDidMount() {
    $('select.dropdown')
        .dropdown();
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    let $form = $('.ui.form'),
    allFields = $form.form('get values');

    //console.log(allFields);
    this.props.onSave(allFields);
  }
  render() {
    const { props: { categories: categories } } = this
    return (
        <form onSubmit={this.handleSubmitForm} className='ui form'>
            <div className="field">
              <label>Название мебели</label>
              <input type="text" name="title" placeholder="Название мебели" />
            </div>
            <div className="field">
              <label>Цена</label>
              <input type="text" name="price" placeholder="Цена" />
            </div>
            <div className="field">
              <label>Категория</label>
              <select  name="categoryId"  className="ui search dropdown">
                <option value="">Выберите категорию</option>
                {categories.edges.map(edge =>
                  <option key={edge.node.id} value={edge.node.id}>{edge.node.title}</option>
                )}
              </select>
            </div>
            <div className="field">
              <label>Изображение</label>
                <button className="ui icon button">
                  <i className="file icon"></i> Open File</button>
                <input type="file" id="file" style={{display:'none'}} />
            </div>
          <button type='submit' className="ui button">Submit</button>
        </form>
    );
  }
}

export default Relay.createContainer(MebelCreateForm, {
  fragments: {
    categories: () => Relay.QL`
    fragment on CategoryConnection {
      edges{
        node{
          id
          title
        }
      }
    }`
  }
})
