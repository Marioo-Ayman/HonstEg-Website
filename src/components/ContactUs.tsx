import TextField from '@mui/material/TextField';
import Contact from '@/assets/Asset-6-1-1024x769.png'
import {Button} from '@mui/material';

export default function ContactUs() {
  return (
    <div className="flex m-4 flex-col md:flex-row w-3/4 ">
      <div>
        <img src={Contact} alt="contact us image" className="w-3/4 " />
      </div>
      <div className="flex flex-col gap-6 items-center border-0 shadow-2xl p-5 mb-2 w-105 rounded-2xl ">
        <p className='text-xl md:text-3xl font-medium  bg-linear-to-r from-amber-500 to-amber-600 text-transparent bg-clip-text inline-block'>Send us a Massege</p>
        <TextField
          id="standard-basic"
          color="warning"
          label="Name"
          variant="standard"
          className="w-3/4"
          sx={{
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "warning.main",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "warning.main",
            },
          }}
        />
        <TextField
          id="standard-basic"
          color="warning"
          label="Email"
          variant="standard"
          className="w-3/4"
          sx={{
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "warning.main",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "warning.main",
            },
          }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Massege"
          multiline
          variant="standard"
          rows={6}
          color="warning"
          className="w-3/4"
          sx={{
            "& .MuiInput-underline:hover:before": {
              borderBottomColor: "warning.main",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "warning.main",
            },
          }}
        />
        <Button
          variant="outlined"
          sx={{
            color: "#FFB300",
            borderColor: "#FFB300",
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: "25px",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#FFB300",
              color: "#FFFFFF",
              borderColor: "#FFB300",
            },
          }}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}
