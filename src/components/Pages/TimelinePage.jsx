import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { 
    ContentCard, 
    PageContainer, 
    BodyText, 
    JobHeaders, 
    FullWidthDiv,
    TwoColumn,
    LazyDiv,
    PhotoCircle,
    ImageBackground
} from './Pages.components';
import { WorkExperience as experience } from '../../Resources/WorkExperience';
import { Hobbies as hobbies } from '../../Resources/Hobbies';
import { getDownloadUrlFromPublicBucket } from '../../utils/public';
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';

const TimelinePage = () => {
    const [ getProfileImageUrl, setProfileImageUrl ] = useState();
    const [ getHobbyImages, setHobbyImages ] = useState({});
    const [ getUwaterlooSeal, setUwaterlooSeal ] = useState();

    useEffect(()=>{
        // We want to get the images for the site
        Object.keys(hobbies).forEach((hobbyName)=>{
            getDownloadUrlFromPublicBucket(hobbies[hobbyName].img).then(value =>{
                const newHobbyImages = getHobbyImages;
                newHobbyImages[hobbyName] = value; // stinky stinky code...
                setHobbyImages(newHobbyImages);
            });
        });
        getDownloadUrlFromPublicBucket("CamWebsite.png").then(value =>{
            setProfileImageUrl(value);
        });
        getDownloadUrlFromPublicBucket("UWaterlooSeal.png").then(value =>{
            setUwaterlooSeal(value);
        });
    }, [getHobbyImages]);

    const jobExperience = Object.keys(experience).map((jobName)=>{
        const jobInfo = experience[jobName];
        return(
            <VerticalTimelineElement
                key={jobName}
                date={jobInfo.date} 
                iconStyle={{ background: jobInfo.color }}
                contentStyle={{ boxShadow: `0 5px 0 ${jobInfo.color}`}}
            >
                <h3>{jobInfo.companyName}</h3>
                <BodyText>
                    <JobHeaders>
                        <em>{jobInfo.title} </em>
                        <b>Tech Stack: {jobInfo.stack} </b>
                    </JobHeaders>
                    {jobInfo.blurb}
                </BodyText>
            </VerticalTimelineElement>
        )
    });

    const hobbyList = Object.keys(hobbies).map((hobbyName)=>{
        const hobbyInfo = hobbies[hobbyName];

        return(
            <ImageBackground 
                key={hobbyName}
            >
                <div>
                    <h3> {hobbyInfo.title} </h3>
                    <p> {hobbyInfo.desc} </p>
                </div>
                <img src={getHobbyImages[hobbyName]} alt={hobbyName}/>
            </ImageBackground>
        )
    });


    return(
        <PageContainer>
            <h1>
                I'm Cameron Hadfield
            </h1>
            <FullWidthDiv background="#90ADC6">
                <em><h2>Who are you?</h2></em>
                <TwoColumn>
                    <PhotoCircle src={getProfileImageUrl}></PhotoCircle>
                    <LazyDiv 
                        style={{
                            fontSize:"1.2em",
                            textAlign:"left"

                        }}
                    >
                        <p>
                            I'm an almost-graduated student at UWaterloo in Computer Science with an interest in security. 
                            I've spent a great deal of time bouncing between projects in hopes of finding the next thing that sucks me in for an unbounded number of hours.
                        </p>
                        <br/>
                        <p>
                            I try to never let a challenge get me down, and to treat everything I do as a learning opportunity.
                            These sound like canned words, but I regularly do things I never thought I'd be doing 5 years ago: I own a server, I do 3D printing and 3D modelling, as well as streaming video games and drawing.
                            I value hands-on experience but I just generally love getting my hands dirty, virtually included.
                        </p>
                        <br/>
                        <p>
                            I am currently looking for full time positions starting as soon as September 2023, so please read on if you've got something
                            that you think I might be right for!
                        </p>
                    </LazyDiv>
                </TwoColumn>
            </FullWidthDiv>
            <ContentCard id="work-experience">
                <div>
                    <h2> My Work Experience </h2>
                    <VerticalTimeline layout='1-column-left'>
                        <VerticalTimelineElement
                            date={new Date().toLocaleDateString()} 
                        >
                            <h2>You visited this page! 🎉🎉</h2>
                            <div>
                                Thanks for paying me a visit! Please, take a look around and navigate to the contact page if you want to get in touch with me!    
                            </div>                        
                        </VerticalTimelineElement>
                        {jobExperience}
                        <VerticalTimelineElement
                            date="The start of time" 
                        >
                            <div>
                                This was a while ago...    
                            </div>                        
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </ContentCard>
            <FullWidthDiv background="#90ADC6" id="waterloo">
                <h3> My Time at Waterloo</h3>
                <TwoColumn>
                    <LazyDiv>
                        <p>
                            I loved attending UWaterloo! I owe a lot of my respect for security 
                            as a field to the CrySP group and the profs within it. 
                            I definitely would recommend it to anyone looking to get engrossed in Computer Science
                        </p>
                        <p>
                            My favourite course had to have been CS246E, as I learned more about OOP from that 
                            course than perhaps at any other point in my life, and have been able to apply 
                            the themes from that course in just about every project I have done since then.
                        </p>

                    </LazyDiv>
                    <PhotoCircle src={getUwaterlooSeal} />
                </TwoColumn>
            </FullWidthDiv>
            <ContentCard id="hobbies">
                <h3> My Hobbies </h3>
                <TwoColumn>
                    <Slider>
                        {hobbyList}
                    </Slider>
                    <LazyDiv
                        style={{
                            fontSize:"1.2em",
                            textAlign:"left"
                        }}
                    >
                        <p>
                            I pretty regularly find myself doing something and think: this is really cool, but I almost never show off any of the stuff that I do.
                        </p>
                        <p>
                            Here's a few examples of things I do for my hobbies. Anything I don't know how to do now, I don't count myself out to do in the future.
                        </p>
                    </LazyDiv>
                </TwoColumn>
            </ContentCard>
            <FullWidthDiv background="#90ADC6" id="contact">
                <em><h2>Contact</h2></em>
                <TwoColumn>
                    <LazyDiv 
                        style={{
                            fontSize:"1.2em",
                            textAlign:"left"

                        }}
                    >
                        <p>
                            So, you've made it this far, why not reach out to me? I'd love to hear from you!
                        </p>
                    </LazyDiv>
                    <LazyDiv 
                        style={{
                            fontSize:"1.2em",
                            textAlign:"left"

                        }}
                    >
                        <p>
                            Find me on LinkedIn: <a href="https://linkedin.com/in/cameronhadfield">/in/cameronhadfield</a>
                        </p>
                        <p>
                            Or maybe Github: <a href="https://github.com/cameronhadfield">/cameronhadfield</a>
                        </p>
                        <p>
                            I look forward to meeting you!
                        </p>
                    </LazyDiv>
                </TwoColumn>
            </FullWidthDiv>
            <h4> This site was made with React.JS </h4>
            <h4> Hosted on <a href="https://github.com/cameronhadfield">Github!</a> </h4>
        </PageContainer>
    );
}

export { TimelinePage }