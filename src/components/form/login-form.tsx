"use client"


import { useForm } from '@tanstack/react-form'
import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Field, FieldLabel } from '../ui/field'
import { Autocomplete } from '@base-ui/react'

export default function LoginForm() {
  const form = useForm({
    defaultValues:{
      email:"",
      password:""
    },
    onSubmit:({value})=>{
      console.log(value)
    }
  })
  return (
    <div>
      <p>Login Form</p>
      <form 
      onSubmit={(e)=>{
        e.preventDefault()
        form.handleSubmit()
      }}>
        <form.Field name="email">
          {(field)=>{
         return (
          <Field>
            <FieldLabel htmlFor={field.name}>
            Email
          </FieldLabel>
          <Input  
          id={field.name}
          name={field.name} 
          onChange={(e)=>field.handleChange(e.target.value)
            
          }
          value={field.state.value}
          onBlur={field.handleBlur}

          autoComplete='off'
          ></Input>
          </Field>
        )
        }
          }</form.Field>
          <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
