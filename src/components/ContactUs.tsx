import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Contact from '@/assets/5124556.jpg'

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <div className="  flex
  flex-col
  md:flex-row
  items-center
  justify-center
  m-4
  md:w-3/4
  space-y-8
  md:space-y-0
  md:space-x-20">
      <div>
        <img src={Contact} alt="contact us image" className="md:scale-90 scale-80" />
      </div>
      <div className="    flex
    flex-col
    gap-6
    items-center
    border-0
    shadow-2xl
    p-5
    rounded-2xl
    w-full
    max-w-md
    md:max-w-xl">
        <p className="text-xl md:text-3xl font-medium bg-linear-to-r from-amber-500 to-amber-600 text-transparent bg-clip-text inline-block">
          {t('contactUs.title')}
        </p>
        <TextField
          id="Full-name"
          label={t('contactUs.name')}
          variant="standard"
          className="w-3/4"
         
        />
        <TextField
          id="Email"
          label={t('contactUs.email')}
          variant="standard"
          className="w-3/4"
         
        />
        <TextField
          id="Message"
          label={t('contactUs.message')}
          multiline
          variant="standard"
          rows={6}
          className="w-3/4"
         
        />
        <Button
          variant="outlined"
          sx={{
            color: '#FFB300',
            borderColor: '#FFB300',
            fontWeight: 600,
            px: 3,
            py: 1,
            borderRadius: '25px',
            fontSize: '0.9rem',
            textTransform: 'uppercase',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: '#FFB300',
              color: '#FFFFFF',
              borderColor: '#FFB300',
            },
          }}
        >
          {t('contactUs.sendButton')}
        </Button>
      </div>
    </div>
  );
}