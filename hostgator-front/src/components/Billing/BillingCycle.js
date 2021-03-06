import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// Billing Cycle Component
function BillingCycle() {
  // use selector to get a state from redux
  const cycles = useSelector((state) => state.cycles);
  const dispatch = useDispatch();
  const [value, setValue] = useState(cycles);

  /**
   * Change cycle type and dispatch a action in redux
   * @param Event event - evento from click
   */
  const handleChange = (event) => {
    dispatch({ type: 'SET_CYCLE', payload: event.target.value });
    setValue(event.target.value);
  };

  return (
    <div className="billing__cycle">
      <FormControl component="fieldset">
        <FormLabel component="legend">Quero pagar a cada:</FormLabel>
        <RadioGroup
          aria-label="cycles"
          name="cycles"
          value={value}
          onChange={handleChange}
          className="cycle__choose"
        >
          <FormControlLabel
            value="triennially"
            control={<Radio />}
            label="3 anos"
            className={
              value === 'triennially' ? 'cycle__choose--active' : ''
            }
          />
          <FormControlLabel
            value="annually"
            control={<Radio />}
            label="1 ano"
            color="default"
            className={
              value === 'annually' ? 'cycle__choose--active' : ''
            }
          />
          <FormControlLabel
            value="monthly"
            control={<Radio />}
            label="Mensal"
            className={
              value === 'monthly' ? 'cycle__choose--active' : ''
            }
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default BillingCycle;
