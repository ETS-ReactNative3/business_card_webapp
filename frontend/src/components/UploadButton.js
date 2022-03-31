import React from 'react'
import Button from '@material-ui/core/Button'

const UploadButton = () => {
  return (
    <div>
    <input
        type="file"
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
  )
}

export default UploadButton