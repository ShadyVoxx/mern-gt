import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';

export default function ResponsiveTimePickers(props) {
    const {formData, setFormData} = props
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer
          components={[
            'TimePicker',
            'MobileTimePicker',
            'DesktopTimePicker',
            'StaticTimePicker',
          ]}
          className={"z-100"}
        >
          <DemoItem label={props.title}>
            <DesktopTimePicker defaultValue={dayjs()} onChange={e => setFormData((prevData) => ({
              ...prevData,
              startTime: e
            }))}/>
          </DemoItem>
          
        </DemoContainer>
      </LocalizationProvider>
    );
  }