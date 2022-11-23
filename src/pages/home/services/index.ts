import axiosInstance from "@/config/axios"

export enum OrderOptions {
    ASC = 'asc',
    DESC = 'desc'
}

export const fetchServices = async () => {
    const res = await axiosInstance.get<ServiceModel[]>('services')
    return res.data;
}

export const fetchExperience = async () => {
    const res = await axiosInstance.get<ExperienceModel[]>('experience');
    return res.data;
}

export const fetchComments = async (order: OrderOptions = OrderOptions.DESC, sortBy: string = 'createdAt',) => {
    const res = await axiosInstance.get<CommentModel[]>(`comments?sortBy=${sortBy}&order=${order}`)
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

export interface CommentModel {
    name: string,
    email: string,
    content: string,
    createdAt: string,
    id: string
}