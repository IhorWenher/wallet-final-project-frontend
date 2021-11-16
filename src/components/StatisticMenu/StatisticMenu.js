import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

import styles from './StatisticMenu.module.css';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const years = ['2021', ' 2022', ' 2023'];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangeMonth = e => {
    const { value } = e.target;
    setMonth(value);
  };
  const handleChangeYear = e => {
    const { value } = e.target;
    setYear(value);
  };

  return (
    <div className={styles.container}>
      <FormControl className={styles.formContainer}>
        <Select
          className={styles.select}
          displayEmpty
          value={month}
          onChange={handleChangeMonth}
          input={<OutlinedInput />}
          renderValue={selected => {
            if (selected.length === 0) {
              return <>Месяц</>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {months.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, month, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Select
          className={styles.select}
          displayEmpty
          value={year}
          onChange={handleChangeYear}
          input={<OutlinedInput />}
          renderValue={selected => {
            if (selected.length === 0) {
              return <>Год</>;
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {years.map(name => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, year, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
