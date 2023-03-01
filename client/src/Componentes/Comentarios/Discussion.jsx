import { DiscussionEmbed } from 'disqus-react';


<DiscussionEmbed

    shortname='example'
    
    config={
        
        {
            url: this?.props?.article.url,
            identifier: this?.props?.article.id,
            title: this?.props?.article.title,
            language: 'zh_TW', //e.g. for Traditional Chinese (Taiwan)
            sso: {
                name: 'SampleNews',
                button: 'http://example.com/images/samplenews.gif',
                icon: 'http://example.com/favicon.png',
                url: 'http://example.com/login/',
                logout: 'http://example.com/logout/',
                profile_url: 'http://example.com/profileUrlTemplate/{username}',
                width: '800',
                height: '300',
            }
        }
    }
/>
export default DiscussionEmbed;