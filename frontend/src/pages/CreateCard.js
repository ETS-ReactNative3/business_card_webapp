import React, { useState } from 'react'
import TextField from'@material-ui/core/TextField'
import UploadButton from '../components/UploadButton'
import PreviewButton from '../components/PreviewButton'
import BusinessCard from '../components/BusinessCard'
import LayoutDropdown from '../components/LayoutDropdown'
import { Grid, makeStyles } from '@material-ui/core'

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
  const [name, setName] = useState('Name')
  const [title, setTitle] = useState('Title')
  const [email, setEmail] = useState('Email')
  const [address, setAddress] = useState('Address')
  const [telephone, setTelephone] = useState('Telephone Numbers')
  const [company, setCompany] = useState('Company Name')

  const [tempName, setTempName] = useState('Name')
  const [tempTitle, setTempTitle] = useState('Title')
  const [tempEmail, setTempEmail] = useState('Email')
  const [tempAddress, setTempAddress] = useState('Address')
  const [tempTelephone, setTempTelephone] = useState('Telephone Numbers')
  const [tempCompany, setTempCompany] = useState('Company Name')

  const handleSubmit = (e) => {
    e.preventDefault()

    setName(tempName)
    setTitle(tempTitle)
    setEmail(tempEmail)
    setAddress(tempAddress)
    setTelephone(tempTelephone)
    setCompany(tempCompany)
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
    
    < UploadButton />

    < LayoutDropdown />

    < PreviewButton />
    
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
    
  )
}

export default CreateCard