import React from 'react';
import "./Footer.css";
import { PlayCircleOutline } from '@material-ui/icons';
import { SkipPrevious } from '@material-ui/icons';
import { SkipNext } from '@material-ui/icons';
import { Shuffle } from '@material-ui/icons';
import { Repeat } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import { PlaylistPlay } from '@material-ui/icons';
import { VolumeDown } from '@material-ui/icons';
import { Slider } from '@material-ui/core';

function Footer() {
    

    return (
        <div className="footer">
            <div className="footer_left">

                <img className="footer_albumlogo" src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg" alt=""></img>
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
                
            </div>
            <div className="footer_center">

                <Shuffle className="footer_green" />
                <SkipPrevious className="footer_icon" />
                <PlayCircleOutline fontSize="large" className="footer_icon" />
                <SkipNext className="footer_icon" />
                <Repeat className="footer_green" />

            </div>
            <div className="footer_right">

                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default Footer;
