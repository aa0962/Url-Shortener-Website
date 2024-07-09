import { UrlState } from '@/context'
import React, { useRef, useState } from 'react'
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
import useFetch from '@/hooks/use-fetch';
import { QRCode } from 'react-qrcode-logo';



const CreateLink =()=> {
    const {user}=UrlState()

    const navigate=useNavigate()
    const ref=useRef()

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
    });

    const handleChange=(e)=>{
      setFormValues({
        ...formValues,
        [e.target.id]:e.target.value,
        })
      }

    useFetch()


  return (
    
     <Dialog defaultOpen={longLink}
     onOpenChange={(res)=> {if(!res) setSearchParams({});
     }}>
  <DialogTrigger>
    <Button variant="destructive">Create New Link</Button>

  </DialogTrigger>
  <DialogContent ClassName="sm:max-w-md">
    <DialogHeader>
      <DialogTitle className='font-bold text-2xl'>Create New</DialogTitle>
     
    </DialogHeader>

    {formValues?.longUrl && (<QRCode value={formValues?.longUrl} size={250} ref={ref}/>)}

    <Input id='title' placeholder="short Link's Title" value={formValues.title} onChange={handleChange}/>
    <Error message={"some error"}/>
    <Input id='longUrl' placeholder="Enter your Looong URL" value={formValues.longUrl} onChange={handleChange}/>
    <Error message={"some error"}/>
    <div className='flex items-center gap-2'>
      <Card ClassName="p-2">trimrr.in</Card>/
      <Input id='customUrl' placeholder="Custom Link (optional)" value={formValues.customUrl} onChange={handleChange}/>
    </div>
    <Error message={"some error"}/>
    <DialogFooter className='sm:justify-start'>
          <Button variant='destructive'>Create</Button>
        </DialogFooter>

  </DialogContent>
</Dialog>


   
  )
}

export default CreateLink
