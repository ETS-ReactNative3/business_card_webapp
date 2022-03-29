import React, { useState } from 'react'
import TextField from'@material-ui/core/TextField'
import UploadButton from '../components/UploadButton'
import PreviewButton from '../components/PreviewButton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 10,
    marginRight: 50,
    marginLeft: 50
  }
})

const CreateCard = (props) => {
  const classes = useStyles()
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [telephone, setTelephone] = useState('')
  const [company, setCompany] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // prints fields in text areas in console after pressing 'Preview Card'
    if (name && title && email && address && telephone && company) {
      console.log(name, title, email, address, telephone, company)
    }

    console.log("hi")
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField 
      onChange={(e) => setName(e.target.value)}
      className={classes.field}
      id="name" 
      label="Name" 
      variant="outlined"
      fullWidth 
      />
    <div>
      <TextField 
        onChange={(e) => setTitle(e.target.value)}
        className={classes.field}
        id="title" 
        label="Title" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setEmail(e.target.value)}
        className={classes.field}
        id="email" 
        label="Email" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setAddress(e.target.value)}
        className={classes.field}
        id="address" 
        label="Address" 
        variant="outlined"
        fullWidth 
      />
    </div>
    <div>
      <TextField 
        onChange={(e) => setTelephone(e.target.value)}
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
        onChange={(e) => setCompany(e.target.value)}
        className={classes.field}
        id="company-name" 
        label="Company Name" 
        variant="outlined"
        fullWidth 
      />
    </div>
    
    < UploadButton />

    < PreviewButton />

    </form>
      
  )
}

export default CreateCard