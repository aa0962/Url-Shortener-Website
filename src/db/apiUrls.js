import supabase from "./supabase";

export async function getUrls(user_id)
{
    const {data,error}=await supabase
    .from("urls")
    .select("*")
    .eq("user_id",user_id)

    
    if(error){
        console.error(error.message)
        throw new Error(error.message);}
    return data;
}

export async function deleteUrl(id)
{
    const {data,error}=await supabase
    .from("urls")
    .delete()
    .eq("id",id)

    
    if(error){
        console.error(error.message)
        throw new Error(error.message);}
    return data;
}