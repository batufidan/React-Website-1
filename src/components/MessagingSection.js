import React from 'react'
import { InnerLayout } from '../styles/Layout'
import styled from 'styled-components';

function MessagingSection() {
  return (
    <MessageStyle>
        <InnerLayout>
            <div className='message-con'>
                <div className='left-items'>
                    <h2 className='secondary-heading'>
                        We support you in 5 different languages
                    </h2>
                    <p className="m-para">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis distinctio vel, quod repellendus enim exercitationem ullam quas facere sapiente esse incidunt, odio laborum?
                    </p>
                    <div className='images-con'>
                            <img src={avatar1} alt="" className="image-1" />
                            <img src={avatar2} alt="" className="image-2" />
                            <img src={avatar3} alt="" className="image-3" />
                            <img src={avatar4} alt="" className="image-4" />
                            <img src={avatar5} alt="" className="image-5" />
                            <p>&nbsp; +25</p>
                    </div>
                </div>
                <div className='right-items'></div>
            </div>
        </InnerLayout>
    </MessageStyle>
  )
}

const MessageStyle = styled.section`
    .left-items{}
    .right-items{}
`;

export default MessagingSection