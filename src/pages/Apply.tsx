import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import Bg from '@/assets/business-man.jpg';
import {Button } from '@mui/material';

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export default function Apply() {
  return (
    <div className='flex relative justify-center items-center '>
      <img
          src={Bg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 blur-xs transform scale-x-105"
        />
      <div className='w-3/4 border-0 shadow-2xl rounded-3xl flex p-10 bg-white mt-20 mb-20'>
        <Grid container spacing={3} >
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="first-name" required>
              First name
            </FormLabel>
            <OutlinedInput
              id="first-name"
              name="first-name"
              type="name"
              placeholder="John"
              autoComplete="first name"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12, md: 6 }}>
            <FormLabel htmlFor="last-name" required>
              Last name
            </FormLabel>
            <OutlinedInput
              id="last-name"
              name="last-name"
              type="last-name"
              placeholder="Snow"
              autoComplete="last name"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address1" required>
              Address 
            </FormLabel>
            <OutlinedInput
              id="address1"
              name="address1"
              type="address1"
              placeholder="Street name and number"
              autoComplete="shipping address-line1"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormLabel htmlFor="address2" required>Email</FormLabel>
            <OutlinedInput
              id="address2"
              name="address2"
              type="address2"
              placeholder="mail@gmail.com"
              autoComplete=""
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="city" required>
              Phone Number
            </FormLabel>
            <OutlinedInput
              id="city"
              name="city"
              type="city"
              placeholder="+20123456789"
              autoComplete=""
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="state" required>
              civilNumber
            </FormLabel>
            <OutlinedInput
              id="state"
              name="state"
              type="state"
              placeholder="1234567891011"
              autoComplete=""
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="zip" required>
              investment Amount
            </FormLabel>
            <OutlinedInput
              id="zip"
              name="zip"
              type="zip"
              placeholder="20,000 USD"
              required
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 6 }}>
            <FormLabel htmlFor="country" >
              Question
            </FormLabel>
            <OutlinedInput
              id="country"
              name="country"
              type="country"
              placeholder="Any Questions?"
              autoComplete="shipping country"
              size="small"
            />
          </FormGrid>
          <FormGrid size={{ xs: 12 }}>
            <FormControlLabel
              control={<Checkbox name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
                     <Button
            variant="outlined"
            className=''
            sx={{
              color: '#0f172b',
              borderColor: '#0f172b',
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: '25px',
              fontSize: '0.9rem',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#0f172b',
                color: '#FFFFFF',
                borderColor: '#0f172b',
              },
            }}
          >
            Buy
          </Button>
          </FormGrid>
        </Grid>
      </div>
    </div>
  );
}