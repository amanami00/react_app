import React, { Component } from 'react';
import LifeCycle from './Lifecycle';
import GitHubLogin from 'react-github-login';

export class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ''
        };
    }

    handleAddCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    handleAddName = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    componentDidMount() {
        const getUrlParams = () => window.location.search;
        const urlParams = new URLSearchParams(getUrlParams());
        const code = urlParams.get('code');

        if (code) {
            const opts = {
                client_id: 'face78185d1ac2e7c0b1',
                client_secret: '4904abc64372da59612941d49240183ed22b94ec',
                code: 'd595ae1c45a286817a17'
            };
            const url = "https://github.com/login/oauth/access_token";
            const proxyurl = 'https://cors-anywhere.herokuapp.com/';
            fetch(proxyurl + url, {
                method: 'POST',
                body: JSON.stringify(opts),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .catch((err) => {
                console.log('err', err);
            })

        }
  }

    render() {
        const { count, name } = this.state;
        const client_id = "face78185d1ac2e7c0b1";
        const redirect_uri = "http://localhost:3001/"
        const Client_ecret = "4904abc64372da59612941d49240183ed22b94ec";
        return (
            <div className="Hello">
                <div className="Hello-Text">
                    <button
                        type="button"
                        className="Hello-Button"
                        onClick={ this.handleAddCount }
                    >
                        Click me
                    </button>
                </div>
                <div className="Hello-Text">
                    <span>Please Enter Your Name:</span>
                    <input
                        className="Hello-Text-Box"
                        type="text"
                        value={ name }
                        onChange={ this.handleAddName }
                    />
                </div>
                <LifeCycle count={ count } name={ name } />
                <div>
                    <p>
                        login with GitHub!
                    </p>
                    <a href={`https://github.com/login/oauth/authorize?client_id=${client_id}&state='amiaman'&scope=user:email&redirect_uri=${redirect_uri}`}>Test</a>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
