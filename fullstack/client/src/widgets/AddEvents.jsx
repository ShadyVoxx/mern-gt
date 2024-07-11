import React from "react";
import { useContext } from "react";
import TimeSelector from "./TimeSelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { UserContext } from "../UserContext";
import { useState } from "react";
import url from "../Constant";

const AddEvents = (props) => {
  const {selectDate, setSelectDate} = props;
  const [formData, setFormData] = useState({
    eventName: "",
    location: "",
    startTime: "",
    endTime: "",
    date:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handlePost = async () => {
    console.log(formData);
    
    const postData = {
      date: selectDate?.toISOString(),
      eventName: formData.eventName,
      location: formData.location,
      startTime: formData.startTime,
      endTime: formData.endTime,
    };
    
    const response = await fetch(`${url}/addevent`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    });

    console.log(response);
    if (!response.ok) {
      console.error('Failed to Add Event:', response.status, response.statusText);
    }
    else{
      setOpen((cur) => !cur);
    }
  }
  return (
    <>
      <Button className="rounded-full px-4 py-4 sm:px-5 sm:py-5 shadow-lg mb-5 border border-gray-300 bg-white hover:bg-gray-100" onClick={handleOpen}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none z-0s"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Add Event
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
                {selectDate?.toDate().toDateString()}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Event Name
            </Typography>
            <Input
              name="eventName"
              label="Event Name"
              size="lg"
              onChange={handleInputChange}
              value={formData.eventName}
            />
            <Typography className="-mb-2" variant="h6">
              Location
            </Typography>
            <Input
              name="location"
              label="Location"
              size="lg"
              onChange={handleInputChange}
              value={formData.location}
            />
            <TimeSelector
              title="Start Time"
              formData={formData}
              setFormData = {setFormData}
              onChange={(value) => handleInputChange({ target: { name: "startTime", value } })}
              value={formData.startTime} className="z-1000"
            />
            <TimeSelector
              title="End Time"
              formData={formData}
              setFormData={setFormData}
              className="z-1000"
              
            />

            <Input label="No of Experienced Users"/>

            <Input label="No of Newbie Users"/>
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handlePost} fullWidth>
              Post            
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  )
}

export default AddEvents