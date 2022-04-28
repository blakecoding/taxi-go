import {View, Text} from 'react-native';
import React, {useState} from 'react';
import CountryPickerModal, {
  DARK_THEME,
} from 'react-native-country-picker-modal';

const CountryPicker = ({setCode}) => {
  const [countryCode, setCountryCode] = useState('US');
  const onSelectedCountry = country => {
    setCountryCode(country.cca2);
    setCode(country.callingCode?.[0]);
  };

  return (
    <CountryPickerModal
      onSelect={onSelectedCountry}
      countryCode={countryCode}
      withFilter
    />
  );
};

export default CountryPicker;
