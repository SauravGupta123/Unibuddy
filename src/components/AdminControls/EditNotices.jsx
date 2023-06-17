import React from 'react'
import { useParams } from 'react-router-dom'

function EditNotices() {
  return (
    <div>
      hi from {useParams().id}
    </div>
  )
}

export default EditNotices
