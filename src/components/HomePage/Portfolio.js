import React from "react";
import {
  Container, HomePage, HomeIcon, HomeIcons, PortfolioButton, BodyImage, LangButtons,
  Header, PortfolioElements, Profile, GreetingText, Name, HireButton
} from './styles';
import PropTypes from 'prop-types';
import logo from '../../images/github.png';
import picture from '../../images/profilepic.jpeg';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {HireMe} from '../HireMe';

class Portfolio extends React.Component {

  render() {
    return (
      <Container>
        <HomePage>
          <Header>
            <h1>{this.props.header}</h1>
          </Header>
          <Profile>
            <div>
              <GreetingText>{this.props.greetingText}</GreetingText>
              <Name>{this.props.name}</Name>
              <p>{this.props.subText}</p>
              {this.props.linkedinUrl || this.props.githubUrl && <HomeIcons>
                <h4>Find Me on</h4>
                {this.props.linkedinUrl && <HomeIcon>
                  <a href={this.props.linkedinUrl} target="_blank" id="linkedIn"><img src="http://www.pngall.com/wp-content/uploads/2016/07/Linkedin-PNG.png" height="40" /> </a>
                </HomeIcon>}
                {this.props.githubUrl && <HomeIcon>
                  <a href={this.props.githubUrl} target="_blank" id="github"><img src={logo} height="40" /></a><br />
                </HomeIcon>}
              </HomeIcons>}
              {/* <BrowserRouter>
              <HireButton><Link to='/hireMe'>Hire Me</Link></HireButton>
              <PortfolioButton>Portfolio</PortfolioButton>
              <div>
                <Switch>
                  <Route exact path = '/hireMe' component = {HireMe}/>
                  </Switch>                
                </div>
              </BrowserRouter> */}
            </div>
            <BodyImage profilepic={this.props.picture || picture}>
            </BodyImage>
          </Profile>
        </HomePage>
      </Container>

    )
  }
};

Portfolio.defaultProps = {
  header: 'Header',
  greetingText: 'Hello',
  name: 'Your Name',
  subText: '',
  picture: '',
  linkedinUrl: '',
  githubUrl: ''
}

Portfolio.propTypes = {
  header: PropTypes.string.isRequired,
  greetingText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subText: PropTypes.string.isRequired,
  picture: PropTypes.string,
  linkedinUrl: PropTypes.string,
  githubUrl: PropTypes.string
}

export default Portfolio; 