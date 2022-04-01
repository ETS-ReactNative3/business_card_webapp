import React, { useState } from 'react'
import TextField from'@material-ui/core/TextField'
// import UploadButton from './UploadButton'
// import PreviewButton from './PreviewButton'
// //import BusinessCard from './BusinessCard'
// import LayoutDropdown from './LayoutDropdown'
import { Grid, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const FormData = require('form-data');

const CreateCard = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [company, setCompany] = useState("");
  const [cardFileName, setCardFileName] = useState("");

  const onChangeFile = e => {
    setCardFileName(e.target.files[0]);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("title", title);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phoneNumber", telephone);
    formData.append("company", company);
    formData.append("cardImage", cardFileName);
    
    setName("");
    setTitle("");
    setEmail("");
    setAddress("");
    setTelephone("");
    setCompany("");

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM4ZGE0ZTVjOWRkMzY3Y2E1M2Q2OSIsImlhdCI6MTY0ODcwMDUwMiwiZXhwIjoxNjUxMjkyNTAyfQ.m3nYzXYg_44LS7xj_CbdeDbTrHnxZrlmvdu2QJhCjxw'

    const config = {headers: {'Authorization': ('Bearer ' + token), 
  //  "Content-Type": ('multipart/form-data'),
  }}

    axios
      .post("http://localhost:5000/api/cards", formData, config)
      .then((res) => {
        console.log(res.data)
        console.log(res.file)
      })
      .catch((err) => {
        console.log(err);
      });
};
  return (
  <div>
    <h1> Create New Card </h1>
    <form autoComplete="off" onSubmit={handleSubmit} encType='multipart/form-data'>
      <div className='form-group'>
        <label htmlFor="name">Name</label>
        <input type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        className="form-control" placeholder="Author Name" />
      </div>
      <div className='form-group'>
        <label htmlFor="position">Position/Title</label>
        <input type="text" 
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control" placeholder="Position/Title" />
      </div>
      <div className='form-group'>
        <label htmlFor="email">Email</label>
        <input type="text"
        value={email} 
        onChange={e => setEmail(e.target.value)}
        className="form-control" placeholder="Email" />
      </div>
      <div className='form-group'>
        <label htmlFor="address">Address</label>
        <input type="text" 
        value={address} 
        onChange={e => setAddress(e.target.value)}
        className="form-control" placeholder="Address" />
      </div>
      <div className='form-group'>
        <label htmlFor="company">Company</label>
        <input type="text"
        value={company}  
        onChange={e => setCompany(e.target.value)}
        className="form-control" placeholder="Company" />
      </div>
      <div className='form-group'>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" 
        value={telephone} 
        onChange={e => setTelephone(e.target.value)}
        className="form-control" placeholder="Phone Number" />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Card
      </button>
      <input
        type="file"
        filename = "cardImage"
        className = "form-control-file"
        onChange = {onChangeFile}
        accept="image/*"
        style={{ display: 'none' }}
        id="background-image"
    />
  <label htmlFor="background-image">
    <Button variant="contained" color="primary" component="span">
        Upload Image
    </Button>
    </label>
    </form>
  </div>
)}

export default CreateCard


  /*
  const concat = require('concat-stream')

const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 50,
    marginLeft: 50
  }
})
  const classes = useStyles()
  const [name, setName] = useState('Name')
  const [title, setTitle] = useState('Title')
  const [email, setEmail] = useState('Email')
  const [address, setAddress] = useState('Address')
  const [telephone, setTelephone] = useState('Telephone Numbers')
  const [company, setCompany] = useState('Company Name')
  const [cardImage, setCardImage] = useState('Company Logo')

  const [tempName, setTempName] = useState('Name')
  const [tempTitle, setTempTitle] = useState('Title')
  const [tempEmail, setTempEmail] = useState('Email')
  const [tempAddress, setTempAddress] = useState('Address')
  const [tempTelephone, setTempTelephone] = useState('Telephone Numbers')
  const [tempCompany, setTempCompany] = useState('Company Name')
  const [tempcardImage, setTempCardImage] = useState('Company Logo')


  
  const onChangeFile = e => {
    setTempCardImage(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    var formData = new FormData();

    console.log("HELLO")

    setName(tempName)
    setTitle(tempTitle)
    setEmail(tempEmail)
    setAddress(tempAddress)
    setTelephone(tempTelephone)
    setCompany(tempCompany)
    setCardImage(tempcardImage)


    formData.append("name", name)
    formData.append("title", title)
    formData.append("email", email)
    formData.append("address", address)
    formData.append("phoneNumber", telephone)
    formData.append("companyName", company)
    formData.append("cardImage", cardImage)

  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDM4ZGE0ZTVjOWRkMzY3Y2E1M2Q2OSIsImlhdCI6MTY0ODcwMDUwMiwiZXhwIjoxNjUxMjkyNTAyfQ.m3nYzXYg_44LS7xj_CbdeDbTrHnxZrlmvdu2QJhCjxw'

    const config = {headers: {'Authorization': ('Bearer ' + token), 
    "Content-Type": ('multipart/form-data'),
   // "Boundary": '--boundary' 
  }}

    /*
    formData.pipe(concat(data =>{
      axios
      .post("http://localhost:5000/api/cards", {data: formData}, config)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
    });
    }))



    axios
      .post("http://localhost:5000/api/cards", {data: formData}, config)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
    });
  
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit} encType='multipart/form-data'>
      <TextField 
      onChange={(e) => setTempName(e.target.value)}
      className={classes.field}
      id="name" 
      label="Name" 
      variant="outlined"
      fullWidth 
      />
    <div>
      <TextField 
        onChange={(e) => setTempTitle(e.target.value)}
        className={classes.field}
        id="title" 
        label="Title" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setTempEmail(e.target.value)}
        className={classes.field}
        id="email" 
        label="Email" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setTempAddress(e.target.value)}
        className={classes.field}
        id="address" 
        label="Address" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setTempTelephone(e.target.value)}
        className={classes.field}
        id="telephone-numbers" 
        label="Telephone Numbers" 
        variant="outlined"
        fullWidth 
        multiline
        rows={4}
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setTempCompany(e.target.value)}
        className={classes.field}
        id="company-name" 
        label="Company Name" 
        variant="outlined"
        fullWidth 
      />
    </div>
    
    <div>
    <input
        type="file"
        filename = "cardImage"
        className = "form-control-file"
        onChange = {onChangeFile}
        accept="image/*"
        style={{ display: 'none' }}
        id="background-image"
    />
    <label htmlFor="background-image">
    <Button variant="contained" color="primary" component="span">
        Upload Background
    </Button>
    </label>
    </div>

    < LayoutDropdown />

    <Button
        type="submit"
        className = "btn btn-primary"
        color="primary"
        variant="contained"
    >
        Submit Card
    </Button>

    
    <Grid justifyContent='center' alignItems='center' direction='column'>
    < BusinessCard
      name={name} 
      title={title} 
      email={email}
      address={address}
      telephone={telephone}
      company={company}
    />
    </Grid>
    </form>

  )*/


//export default CreateCard