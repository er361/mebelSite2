import React, {Component} from 'react';

export default class Mebel extends Component {
  render(){
    return(
      <form className='ui form'>
        <div className='fields'>
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
            <select className="ui search dropdown">
              <option value="">Select Country</option>
              <option value="AF">Afghanistan</option>
            </select>
          </div>
          <div className="field">
            <label>Изображение</label>
              <button className="ui icon button">
                <i className="file icon"></i> Open File</button>
              <input type="file" id="file" style={{display:'none'}} />
          </div>
        </div>
      </form>
    )
  }
}
