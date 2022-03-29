import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const PreviewButton = () => {
  return (
    <Link to="/preview_card">
    <Button
        type="submit"
        color="primary"
        variant="contained"
    >
        Preview Card
    </Button>
    </Link>
  )
}

export default PreviewButton