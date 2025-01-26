import React from 'react'
import "./Widgets.css"
import InfoIcon from "@mui/icons-material/Info"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets-article'>
            <div className='widgets-article-left'>
            <FiberManualRecordIcon/>
            </div>
                <div className='widgets-article-right'>
                    <h4> {heading} </h4>
                    <p> {subtitle} </p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets-header'> 
            <h2> LinkedIn News </h2>
            <InfoIcon />
            </div>
            {newsArticle("Software Engineering is in trend again", "Top news - 9999 readers")}
            {newsArticle("Prosecutor asks judges to jail a second defendant for 16 years", "Top news - 3456 readers")}
            {newsArticle(" Bushra didn't mention Saudi Arabia at all, says Imran after backlash ", "Top news -8934 readers")}
            {newsArticle("Major development ahead of neglected projects", "9034 readers")}
            {newsArticle(" Guardiola signs two-year contract extension ", "Top news - 4563 readers")}
    </div>
  )
}

export default Widgets
