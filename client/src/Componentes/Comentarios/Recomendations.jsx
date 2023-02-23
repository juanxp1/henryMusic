import { Recommendations } from 'disqus-react';

<Recommendations 
    shortname='example'
    config={
        {
            url: this?.props?.article.url,
            identifier: this?.props?.article.id,
            title: this?.props.article?.title,
        }
    }
/>

export default Recommendations;