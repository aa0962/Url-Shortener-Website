import { UrlState } from '@/context'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Card } from './ui/card'
import Error from './error';
import * as yup from 'yup'
const CreateLink =()=> {
    const {user}=UrlState()

    const navigate=useNavigate()

    let [searchParams,setSearchParams]=useSearchParams()
    const longLink=searchParams.get("createNew");

    const[errors,setErrors]=useState({});
    const [formValues,setFormValues]=useState({
        title:"",
        longUrl:longLink ? longLink : "",
        customUrl:"",
    })

    const schema =yup.object().shape({
        title:yup.string().required("Title is required"),
        longUrl:yup
            .string()

            .url("Must be a valid URL")
            .required("Long URL is required"),
        customUrl:yup.string(),
    })


  return (
    <div>
     <Dialog>
  <DialogTrigger>
    <Button variant="destructive">Create New Link</Button>

  </DialogTrigger>
  <DialogContent ClassName="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className='font-bold text-2xl'>Create New</DialogTitle>
     
    </DialogHeader>

    <Input id='title' placeholder="short Link's Title"/>
    <Error message={"some error"}/>
    <Input id='title' placeholder="Enter your Looong URL"/>
    <Error message={"some error"}/>
    <div className='flex items-center gap-2'>
      <Card ClassName="p-2">trimrr.in</Card>/
      <Input id='title' placeholder="Custom Link (optional)"/>
    </div>
    <Error message={"some error"}/>
    <DialogFooter className='sm:justify-start'>
          <Button variant='destructive'>Create</Button>
        </DialogFooter>

  </DialogContent>
</Dialog>


    </div>
  )
}

export default CreateLink
