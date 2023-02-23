import { CommentCount } from 'disqus-react';

<CommentCount
    shortname='example'
    config={
        {
            url: this?.props?.article?.url,
            identifier: this?.props?.article.id,
            title: this?.props?.article?.title,
        }
    }
>
    {/* Placeholder Text */}
    Comments
</CommentCount>


export default CommentCount;