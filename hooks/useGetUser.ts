import { createClient } from "@/utils/supabase/client"

export const useGetUser = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    return data.user;
}