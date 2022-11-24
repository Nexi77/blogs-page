import comments from '@/assets/styles/comments/comments.module.scss'
import { formatDate } from '@/lib/utils';
import { CommentModel } from '@/pages/home/services';
import GenericDiv from '@/components/GenericAnimatedDiv'

const SingleComment = ({ comment } : CommentProps) => (
    <GenericDiv
        className={comments.single_comment_wrapper}
        amount={0.6}
    >
        <p className={comments.created_at}>{ formatDate(comment.createdAt, "MMM dd, yyyy") }</p>
        <h4 className={comments.name_email}>
            <span style={{ marginRight: '1rem'}}>{ comment.name || 'anonymous' }</span>
            <span>{ comment.email } </span>
        </h4>
        <p className={comments.content}>
            { comment.content || 'empty comment' }
        </p>
    </GenericDiv>
)

interface CommentProps {
    comment: CommentModel
}

export default SingleComment;