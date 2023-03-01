import { CommentEmbed } from 'disqus-react';




<CommentEmbed
    commentId={this?.props?.article.featuredCommentId}
    showMedia={false}
    showParentComment={true}
    width={420}
    height={50}
/>


export default CommentEmbed;