import { format } from "date-fns"


export const formatDate = (date: string, formatString: string = "MMMM yyyy"): string => {
    if(!date) return 'unspecified'
    const dateObj = new Date(date)
    return format(dateObj, formatString)
}