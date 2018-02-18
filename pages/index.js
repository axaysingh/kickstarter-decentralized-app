import React , {Component} from "react";
import { Button, Card, Grid , Divider , Container , Image , Icon , Popup } from 'semantic-ui-react';
import SimpleCard from './components/SimpleCards';

import factory from '../factory';

const datas = [
    {
        name : "fem -A Japan-made Multifunctional bag for Minimalists",
        budget : "87%",
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
    {
        name : "Something new to That World bag for Minimalists",
        budget : "32%",
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
    {
        name : "Something new to Another world bag for Minimalists",
        budget : "25%",
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
    {
        name : "Somthing new to this world bag for Minimalists",
        budget : "2%",
        description : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
    },
]


export default class CampaignIndex extends Component {
    static async getInitialProps(){
        const campaigns = await factory.methods.getAllCampaigns().call();
        
        return {campaigns};
    }
    render(){
        return(
            <div>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>    
                <Container>
                <Grid className="CampaignKeeper" style={{marginTop : '10px'}} columns={2}>
                    <Grid.Row>
                        <Grid.Column width={7}>
                                <Image size='massive' src='https://placeholdit.co//i/500x580?bg=eeeeee' />
                        </Grid.Column>
                        <Grid.Column width={9}>
                            <SimpleCard datas={datas}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>
            </div>
        )
    }
}

const styles = {
    textHeaderStyle : {
        backgroundColor : '#252525',
        color : '#ffff',
    }
}


