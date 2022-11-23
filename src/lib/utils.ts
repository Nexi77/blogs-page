import { format } from "date-fns"


export const formatDate = (date: string): string => {
    if(!date) return 'unspecified'
    const dateObj = new Date(date)
    return format(dateObj, "MMMM yyyy")
}