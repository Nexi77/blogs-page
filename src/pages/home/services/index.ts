import axiosInstance from "@/config/axios"

export const fetchServices = async () => {
    const res = await axiosInstance.get<ServiceModel[]>('services')
    return res.data;
}

export const fetchExperience = async () => {
    const res = await axiosInstance.get<ExperienceModel[]>('experience');
    return res.data;
}

export interface ServiceModel {
    name: string,
    description: string,
    id: string
}

export interface ExperienceModel {
    company: string,
    description: string,
    from: string,
    id: number,
    to: string
}