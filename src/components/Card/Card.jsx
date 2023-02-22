import PropTypes from 'prop-types';

import { Paper } from 'components/Paper';

import universityIcon from '../../assets/images/universityIcon.svg';
import universityData from '../constants/universityData.json';

import style from './Card.module.css';

export function Card({ universityName }) {
  return (
    <Paper>
      <div className={style.card}>
        <img src={universityIcon} alt="university img" />
        <p></p>
        <h3></h3>
        <div>
          <button></button>
          <button></button>
        </div>
      </div>
    </Paper>
  );
}

Card.propTypes = {
  universityName,
};
