import { FieldError } from 'react-hook-form/dist/types';
import { DetailedHTMLProps, ReactNode, TextareaHTMLAttributes } from 'react'

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError;
}