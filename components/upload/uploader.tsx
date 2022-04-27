import axios from 'axios'
import { UiFileInputButton } from '../form/form'

const Uploader = (): JSX.Element => {
  const onChange = async (formData: FormData): Promise<void> => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: ProgressEvent): void => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        )
      }
    }

    const response = await axios.post('/api/convert', formData, config)

    console.log('response', response.data)
  }

  return (
    <UiFileInputButton
      label="Upload Single File"
      uploadFileName="theFiles"
      onChange={onChange}
    />
  )
}

export default Uploader
