import { CommentModel, fetchComments, OrderOptions } from '@/pages/home/services';
import GenericDiv from '@/components/GenericAnimatedDiv'
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useQuery } from 'react-query';
import Pagination from '@/pages/comments/components/Pagination';
import SingleComment from '@/pages/comments/components/SingleComment';
import comments from '../styles/comments.module.scss';


const GenericSkeleton = () => (
    <>
        <SkeletonTheme baseColor="#202020" highlightColor="#444"  >
            <p>
                <Skeleton count={4} />
            </p>
        </SkeletonTheme> 
            
        <SkeletonTheme baseColor="#202020" highlightColor="#444" >
            <p>
                <Skeleton count={4} />
            </p>
        </SkeletonTheme> 

        <SkeletonTheme baseColor="#202020" highlightColor="#444" >
            <p>
                <Skeleton count={4} />
            </p>
        </SkeletonTheme> 
    </>
)

const GenericError = () => <p className="error">Error occured while trying to fetch qualificatons data, referesh the page and try again</p>

const Comments = () => {

    const [order, setOrder] = useState(OrderOptions.DESC)
    const [limit] = useState(4);
    const [commentsToRender, setCommentsToRender] = useState<CommentModel[]>([])
    const [page, setPage] = useState(1)

    const handlePageChange = (pageNumber: number) => {
        setPage(pageNumber);
    }

    const { data, status, isLoading } = useQuery(['comments', order], () => fetchComments(order))

    useEffect(() => {
        if(data){
            const newSlice = data.slice((page - 1) * limit, ((page - 1) * limit) + limit)
            setCommentsToRender(newSlice);
        }
    }, [data, limit, page])


    return (
        <section id="comments">
            <h2 className="sr-only">
                Section containg comments of users that visited my page
            </h2>
            <div className={comments.comments_container}>
                <GenericDiv className={comments.header} amount={0.2}>
                    <h3>Comments</h3>
                    <div className={comments.sorting}>
                        <span>
                            <button type="button" onClick={() => setOrder(OrderOptions.ASC)} className={order === OrderOptions.ASC ? comments.active_sort : ''}>oldest</button>
                            |
                            <button type="button" onClick={() => setOrder(OrderOptions.DESC)} className={order === OrderOptions.DESC ? comments.active_sort : ''}>newest</button>
                        </span>
                    </div>
                </GenericDiv>
                <div>
                    { isLoading && <GenericSkeleton /> }
                    { status === "error" && <GenericError /> }
                    { data && (
                        <div className={comments.comments_list}>
                            {commentsToRender.map(comment => (
                                <SingleComment key={comment.createdAt} comment={comment}  />
                            ))}
                        </div>
                    )}
                </div>
                <Pagination 
                    dataLength={data?.length || 0} 
                    activePage={page} 
                    handlePageChange={handlePageChange}
                    limit={limit}
                />
            </div>
        </section>
    )
}

export default Comments;