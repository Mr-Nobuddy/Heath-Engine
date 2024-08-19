'use server'
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout(){
    const supabase = createClient();

    const { error } = await supabase.auth.signOut();

    if(error){
        console.log(error);
        redirect('/error');
    }
    revalidatePath('/','layout');
    redirect('/login')
}