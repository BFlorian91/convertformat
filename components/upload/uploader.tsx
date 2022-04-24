import { Stack, Input, InputRightElement, Button, FormControl, FormLabel, InputGroup, InputLeftElement, FormErrorMessage, Icon } from "@chakra-ui/react";
import { useForm } from "react-hook-form";


const Uploader = () => {
    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    const handleClick = () => { }

    return (
        <FormControl onSubmit={onSubmit}>
            <Stack spacing='30px'>
                <InputGroup>
                    <Input type="file" placeholder='large size' size='lg' variant='outline' />
                </InputGroup>
                <Button colorScheme='teal' variant='outline'>
                    Convert
                </Button>
            </Stack>
        </FormControl>
    );
}

export default Uploader;