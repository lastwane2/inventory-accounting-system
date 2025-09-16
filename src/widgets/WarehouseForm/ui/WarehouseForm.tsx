import Button from "@mui/material/Button"
import Modal from "@mui/material/Modal"
import Box from '@mui/material/Box';
import { useState } from "react"
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const WarehouseForm = () => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    
    
    return(
        <div>
            <Button type="button" onClick={handleOpen}>Добавить склад</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}