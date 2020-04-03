import React from 'react';
import Parallax from '../../../components/UI/Parallax/Parallax';
import SpanningImage from '../../../components/UI/SpanningImage/SpanningImage';
import Button from '../../../components/UI/Button/Button';

export const PROJECTS = [
    {
        //Instinct
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Finstinctlogo.jpg?alt=media&token=5bd6bd03-32d5-4fde-99c0-b9ad89974828">
                <div className="project-title">
                    Instinct
                </div>
                <div className="project-body">
                    <div className="section">
                    A VR Stealth Action Game
                    </div>
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div className="project-body padded">
                Sadly, never completed, but you can check it out 
                in these places!
                <div className="vertical-padding">
                    <Button
                    clicked={()=>
                        window.open("https://gamejolt.com/games/instinct/319996")
                    } 
                    >
                        Gamejolt <span role="img">🔗</span>
                    </Button>
                </div>
                <div className="vertical-padding">
                    <Button
                    clicked={()=>
                        window.open("https://twitter.com/3204Dev")
                    } 
                    >
                        Twitter <span role="img">🔗</span>
                    </Button>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422"

        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"

        },
        width: "350px",
        height: "350px",
    },
    {
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://i.pinimg.com/originals/ac/81/de/ac81de1f31dbd8a29b107b0839787e6c.png">
                <div className="project-title">
                VM
                </div>
                <div className="project-body">
                    A C++ built ViM-style editor
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div>
                <div className="project-body">
                    <div className="section">
                        VM was the final project for CS246E.
                    </div>
                    <div className="section">
                        My partner and I were successfully able to build a
                        curses based, watered down version of ViM
                        for this project
                    </div>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422",
        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"
        },
        width: "350px",
        height: "350px",
    },
    {
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://img.itch.zone/aW1hZ2UvMTY4OTA2LzkwNDY1Ny5qcGc=/original/x57vdz.jpg"
            >
                <div className="project-title">
                    To The Beat VR
                </div>
                <div className="project-body">
                    A VR Rhythm Game featuring realtime track generation
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div>
                <div className="project-body">
                    <div className="section">
                    To the beat was the first major game project I ever undertook, 
                    and really launched my interest in VR
                    </div>
                    <div className="section">
                        <Button clicked={()=>window.open("https://cdawgvr.itch.io/to-the-beat-vr")}>
                            itch.io <span role="img">🔗</span>
                        </Button>
                    </div>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422",
        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"
        },
        width: "350px",
        height: "350px",
    },
    {
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://cdn.shopify.com/s/files/1/1330/9625/products/l_1.png?v=1531871305"
            >
                <div className="project-title">
                    Cam 360
                </div>
                <div className="project-body">
                    Embeddable VR Image Tours
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div>
                <div className="project-body">
                    <div className="section">
                    Cam 360 was built using Google's VRView as a base,
                    and was designed to help make tours for real-estate and schools
                    </div>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422",
        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"
        },
        width: "350px",
        height: "350px",
    },
    {
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Finstinctlogo.jpg?alt=media&token=5bd6bd03-32d5-4fde-99c0-b9ad89974828"
            >
                <div className="project-title">
                    Reporter's Instinct
                </div>
                <div className="project-body">
                    A podcast series written, produced and edited by me
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div>
                <div className="project-body">
                    <div className="section">
                        Reporter's Instinct was a part of a final project in highschool,
                        and I ended up writing an 8 part fictional true-crime podcast for it
                    </div>
                    <Button clicked={
                        ()=>window.open("https://soundcloud.com/antonygried")
                    }>
                        Soundcloud <span role="img">🔗</span>
                    </Button>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422",
        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"
        },
        width: "350px",
        height: "350px",
    },
    {
        frontContent:(
            <SpanningImage
            height="350px"
            width="350px"
            noBorders={true}
            overlayStyle={{
                backgroundColor:"#111122bb",
                pointerEvents:"none"
            }}
            src="https://firebasestorage.googleapis.com/v0/b/personalwebsiteassets.appspot.com/o/images%2Fcam_face_pic_256.png?alt=media&token=062894d9-7652-4757-904b-e95aa87a6eb4"
            >
                <div className="project-title">
                    Personal Site
                </div>
                <div className="project-body">
                    This website!
                </div>
            </SpanningImage>
        ),
        backContent:(
            <div>
                <div className="project-body">
                    <div className="section">
                        I have had so much fun building this site and 
                        applying what I do at work for personal projects!
                        Check out the source!
                    </div>
                    <Button clicked={
                        ()=>window.open("https://github.com/CameronHadfield/cameronhadfield.github.io")
                    }>
                        Github <span role="img">🔗</span>
                    </Button>
                </div>
            </div>
        ),
        cardFrontStyle:{
            backgroundColor: "#121429",
            border: "9px solid #121422",
        },
        cardBackStyle:{
            backgroundColor:"#19592a",
            border: "9px solid #19592a"
        },
        width: "350px",
        height: "350px",
    }
]
// Template:
/*
{
    frontContent:(
        <div>

        </div>
    ),
    backContent:(
        <div>

        </div>
    ),
    cardFrontStyle:{

    },
    cardBackStyle:{

    },
    width: "fit-content",
    height: "fit-content",
}
*/