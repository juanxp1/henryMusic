import React from 'react'
import { DiscussionEmbed } from 'disqus-react';
import { Recommendations } from 'disqus-react';
import Accordion from 'react-bootstrap/Accordion';


function Colapse() {
    return (
        <div className='container '>

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0" >
                    <Accordion.Header variant="dark"><h4 className='w-100  d-flex justify-content-center'>Wall Henry</h4></Accordion.Header>
                    <Accordion.Body variant="dark">
                        <div className='container'>
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
                        </div>

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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


        </div>
    )
}

export default Colapse