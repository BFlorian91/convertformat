import { useState } from 'react';
import axios from 'axios';
import { Stack, Input, Button, FormControl, InputGroup } from "@chakra-ui/react";


const Uploader = () => {

    const [file, setFile] = useState()
    const [fileConvert, setFileConvert] = useState()

    const onSubmit = async (e: any) => {
        e.preventDefault();
        const payload = { file };
        const response = await axios.post('/api/convert', payload)
        const data = await response.data;

        console.log('Client: ', data);
        setFileConvert(data)
        
    }

    const onChange = async (e: any) => setFile(e.target.value);


    return (
        <form onSubmit={onSubmit} method="post">
            <FormControl>
                <Stack spacing='30px'>
                    <InputGroup>
                        <Input type="file" name="file" onChange={onChange} placeholder='large size' size='lg' variant='outline' />
                    </InputGroup>
                    <Button type='submit' colorScheme='teal' variant='outline'>
                        {fileConvert ? 'Download' : 'Convert'}  
                    </Button>
                    <a href={fileConvert} download>Download</a>
                </Stack>
            </FormControl>
        </form>

    );
}

export default Uploader;