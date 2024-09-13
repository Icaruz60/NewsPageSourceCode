import React from 'react'
import {Gallery} from 'chayns-components';
import { SharingBar } from 'chayns-components';
import { DateInfo } from 'chayns-components';
import './Newsfeed.css';
import Linkify from 'react-linkify';



export default function Newsblock(props){
    
    const [more, setMore] = React.useState(false);

    var fullParagraph = props.paragraph.replace('<p>','').replace('</p>', '');
    var cutat = fullParagraph.lastIndexOf(" ", 200)
    let cutParagraph = fullParagraph.slice(0, cutat) + "... Mehr"
    return(
        <Linkify componentDecorator={(decoratedHref, decoratedText, key) => ( <a target="blank" href={decoratedHref} key={key}> {decoratedText} </a> )} >
        <div class ="news">
         
            <Gallery 
            images={props.images}
            preventParams= {true}
            style={{
                margin: '0px',
            }}
            />
            <h1 class = "header" id = "h">{props.header}</h1>
            {more== false &&
                <div>
                    <p onClick={()=> {setMore(true)}} id="plac" class="plac2">{cutParagraph}</p>      
                                
                </div>
            }

            
            {more == true && <p  id="plac" class="plac">{fullParagraph}</p>}
            <div class ="inforow">
            <div class = "teilen" style={{ height: '5px' }} />
                <SharingBar stopPropagation link={props.link} />
                <div class="postdate" onClick={() => {window.open(props.link)}}>
                <DateInfo date={props.time} language="de" class="date"  /> 
                <div class="logo">
                <i class="fa-brands fa-facebook-f" ></i>
                </div>
                
            
            
                </div>
            
            </div>
            
        </div>
        </Linkify>
        
            

    )
    ///have empty news feed fill with prop info 
    
            //<p onClick={()=> {setMore(true)}} dangerouslySetInnerHTML={{__html: cutParagraph}} id="plac" class="plac2"></p>  
            //{more == true && <p dangerouslySetInnerHTML={{__html: props.paragraph}} id="plac" class="plac"></p>}
}
