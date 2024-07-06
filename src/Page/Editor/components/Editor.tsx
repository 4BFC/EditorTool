import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../../image/logo-icon.svg';

import saveIcon from '../image/save-icon.png';
import editIcon from '../image/edit-icon.png';
import deleteIcon from '../image/delete-icon.png';

import underLineIcon from '../image/underline-icon.png';
import boldIcon from '../image/bold-icon.png';
import italicIcon from '../image/italic-icon.png';
import lineThroughIcon from '../image/line-through-icon.png';
import '../scss/editor.scss'
import Button from '../../common/components/Button/Button';

const Editor = () => {
  return (
    <div className='editor'>
      <div className='logo-image'>
        <img src={mainLogo} />
        <div className="group">
          <Button className='main-btn' link={<Link to='/'>메인으로</Link>} />
          <div id="info-bg">
            <div id="info-icon">?</div>
          </div>
        </div>
      </div>
      <div className="edit">
      <hr />
      <h3>ToDoList</h3>
        <div className='container'>

          <div className="group">
            <div className="btn">
              <img src={saveIcon} id='btn'></img>
              <img src={editIcon} id='btn'></img>
              <img src={deleteIcon} id='btn'></img>
            </div>
            <div className='tool'>
              <div className="elements">
                <span id="tool">Tool</span>
                <button className="btn">
                  <img id="" src={underLineIcon} />
                </button>
              </div>
            </div>
            <div className="input">
              <div className="elements">
                <div
                  contentEditable = 'true'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default Editor;