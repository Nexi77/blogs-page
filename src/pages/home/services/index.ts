import axiosInstance from "@/config/axios"

export const fetchServices = async () => {
    const res = await axiosInstance.get<ServiceModel[]>('services')
    return res.data;
}

export interface ServiceModel {
    name: string,
    description: string,
    id: string
}