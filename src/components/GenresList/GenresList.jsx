import { useState } from 'react';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function GenresList({ genres, selectedGenres, onGenreSelect }) {
  const [genreName, setGenreName] = useState([]);

  const handleChange = event => {
    const {
      target: { value },
    } = event;
    setGenreName(value);
    onGenreSelect(value);
  };
  return (
    <>
      <FormControl
        sx={{ m: 1, width: 300, backgroundColor: 'white', borderRadius: '3px' }}
      >
        <InputLabel
          sx={{
            color: genreName.length > 0 ? '#808080' : '#808080',
            marginTop: genreName.length > 0 ? '-8px' : '-3px',
          }}
          id="demo-multiple-checkbox-label"
        >
          Genres
        </InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={genreName}
          onChange={handleChange}
          input={<OutlinedInput sx={{ height: 48 }} label="Genres" />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {genres?.map(genre => (
            <MenuItem key={genre.id} value={genre.name}>
              <Checkbox checked={selectedGenres.indexOf(genre.name) > -1} />
              <ListItemText primary={genre.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
