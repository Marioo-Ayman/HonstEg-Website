// types/imageUpload.ts
export interface ImageFile extends File {
  preview?: string;
}

export interface ImageUploadFormValues {
  image: File | null;
  imageUrl?: string;
}

export interface ImageUploadProps {
  name: string;
  label?: string;
  initialImage?: string;
  maxSize?: number; // in bytes
  accept?: string;
}