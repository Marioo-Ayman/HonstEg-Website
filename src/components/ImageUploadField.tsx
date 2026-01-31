// components/ImageUploadField.tsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useField, useFormikContext } from 'formik';
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Stack,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ImageIcon from '@mui/icons-material/Image';

interface ImageUploadFieldProps {
  name: string;
  label?: string;
  maxSize?: number;
  accept?: string;
}

export const ImageUploadField: React.FC<ImageUploadFieldProps> = ({
  name,
  label = 'Upload Image',
  maxSize = 5 * 1024 * 1024, // 5MB
  accept = 'image/*',
}) => {
  const [field, meta, helpers] = useField<File | null>(name);
  const [preview, setPreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        helpers.setValue(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }, 500);
    }
  }, [helpers]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept ? { [accept]: [] } : undefined,
    maxSize,
    maxFiles: 1,
  });

  const handleRemove = () => {
    helpers.setValue(null);
    setPreview(null);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <input {...getInputProps()} />
      
      <Paper
        {...getRootProps()}
        sx={{
          p: 3,
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'grey.300',
          backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
          cursor: 'pointer',
          textAlign: 'center',
          '&:hover': {
            borderColor: 'primary.main',
            backgroundColor: 'action.hover',
          },
        }}
      >
        {isUploading ? (
          <CircularProgress />
        ) : preview ? (
          <Box sx={{ position: 'relative' }}>
            <img
              src={preview}
              alt="Preview"
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                borderRadius: '4px',
              }}
            />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleRemove();
              }}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                bgcolor: 'error.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'error.dark',
                },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ) : (
          <Stack alignItems="center" spacing={2}>
            <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main' }} />
            <Typography variant="h6">{label}</Typography>
            <Typography variant="body2" color="textSecondary">
              Drag & drop an image here, or click to select
            </Typography>
            <Typography variant="caption" color="textSecondary">
              Supported formats: JPG, PNG, GIF • Max size: {maxSize / 1024 / 1024}MB
            </Typography>
          </Stack>
        )}
      </Paper>
      
      {meta.touched && meta.error && (
        <Typography color="error" variant="caption" sx={{ mt: 1, display: 'block' }}>
          {meta.error}
        </Typography>
      )}
    </Box>
  );
};