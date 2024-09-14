import React, {useEffect} from 'react';
import './logIn.css';
import axios from "axios";
const { Component } = React;


/*
* 로그인
* */
function goToLogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/login', {
                username,
                password,
            });

            // 로그인 성공 시 토큰 저장 (예: 로컬 스토리지)
            localStorage.setItem('token', response.data.token);

            // 로그인 성공 후 원하는 페이지로 이동
            alert('Login successful!');
        } catch (err) {
            // 에러 처리
            setError('Invalid credentials');
        }
    };

}

/*
* 회원가입
* */
function goToSignUp() {


}
// stateless component for the panel prominently featuring the button to enable the slide function
const ActionPanel = ({ signIn, slide }) => {
    // content to show conditional to the signIn boolean
    const heading = 'BAND HIVE';
    const paragraph = signIn ? '합주실 대여 & 공유 플랫폼에 오신것을 환영합니다.' : '가입해주세용';
    const button = signIn ? '가입하기' : '로그인하기';

    // render the elements and includ the slide function when pressing the button
    return (
        <div className="Panel ActionPanel">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <button onClick={slide}>{button}</button>
        </div>
    );
};


// stateless component depicting the panel with input elements
const FormPanel = ({ signIn }) => {
    // heading
    const heading = signIn ? '로그인' : '회원가입';

    // array for authentications platforms (dead links as a proof of concept)
    const social = [
        {
            href: '#',
            icon: 'k'
        },
        {
            href: '#',
            icon: 't'
        },
        {
            href: '#',
            icon: 'in'
        }
    ];
    // paragraph shared by both versions of the panel
    const paragraph = signIn ? '또는 이메일 주소로 로그인하기' : '또는 이메일 주소로 가입하기';

    // array of input elements, specifying the type and placeholder
    const inputs = [
        {
            type: 'text',
            placeholder: '이메일 주소'
        },
        {
            type: 'password',
            placeholder: '비밀번호'
        }
    ];
    // if the signIn boolean directs toward the sign up form, include an additional input in the inputs array, for the name
    if (!signIn) {
        inputs.unshift(

            {
            type: 'text', placeholder: '이름'

        },
            {
                type: 'text',
                placeholder: '휴대폰 번호'
            }
        );

    }

    // link also shared by both versions of the panel
    const link = {
        href: '#',
        text: '비밀번호를 잊으셨나요?'
    }

    // button to hypothetically sign in/up
    const button = signIn ? '로그인하기' : '가입하기';

    // render the specified content in the matching elements
    return (
        <div className="Panel FormPanel">
            <h2>{heading}</h2>
            <div className="Social">
                {
                    social.map(({ href, icon }) => <a href={href} key={icon}>{icon}</a>)
                }
            </div>
            <p>{paragraph}</p>
            <form>
                {
                    inputs.map(({ type, placeholder }) => <input type={type} key={placeholder} placeholder={placeholder} />)
                }
            </form>
            <a href={link.href}>{link.text}</a>
            <button>{button}</button>
        </div>
    );
};


// main component managing the state of the application, detailing the slide function and rendering the necessary components
class logIn extends Component {
    constructor() {
        super();
        this.state = {
            // boolean to determine which set of panels to show
            // determining also the content of the panels
            signIn: true,
            // boolean to avoid having the slide function run before the transition is completed
            transition: false
        }
        // bind the slide function to update the state
        this.slide = this.slide.bind(this);
    }
    slide() {
        // retrieve the signIn boolean
        const { signIn, transition } = this.state;

        // if already transitioning, pre-emptively escape the function
        // else continue applying the slide effect
        if (transition) {
            return;
        }

        // target the two panel elements
        const formPanel = document.querySelector('.FormPanel');
        const actionPanel = document.querySelector('.ActionPanel');
        // retrieve the child elements of the action panel (to transition them in and out of view)
        const actionPanelChildren = actionPanel.children;

        // continue only if the elements are not transitioning
        // retrieve the bounding box allowing to decipher the position and size of the elements
        const formBoundingRect = formPanel.getBoundingClientRect();
        const actionBoundingRect = actionPanel.getBoundingClientRect();

        // apply a transition (later removed to re-arrange the position of the elements without visual modification)
        formPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
        actionPanel.style.transition = 'all 0.7s cubic-bezier(.63,.39,.54,.91)';
        // apply a transiton to the child elements of the second panel as well
        [...actionPanelChildren].forEach(child => child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)');

        this.setState({
            transition: true
        })

        // if signing in slide the form panel to the right, the action panel the other way
        if (signIn) {
            // by an amount equal to the other element's width
            formPanel.style.transform = `translateX(${actionBoundingRect.width}px)`;
            actionPanel.style.transform = `translateX(${-formBoundingRect.width}px)`;

            // transition the child elements out of sight in a direction opposite to the action panel
            [...actionPanelChildren].forEach(child => {
                child.style.transform = `translateX(${actionBoundingRect.width / 2}px)`;
                child.style.opacity = 0;
                child.style.visibility = 'hidden';
            });

            // ! update the border radius as well
            formPanel.style.borderRadius = '0 20px 20px 0';
            actionPanel.style.borderRadius = '20px 0 0 20px';
        } else {
            // else translate the elements back to where they sat earlier
            // ! not to translateX(0), as their position is actually and soon modified
            formPanel.style.transform = `translateX(${-actionBoundingRect.width}px)`;
            actionPanel.style.transform = `translateX(${formBoundingRect.width}px)`;

            [...actionPanelChildren].forEach(child => {
                child.style.transform = `translateX(${-actionBoundingRect.width / 2}px)`;
                child.style.opacity = 0;
                child.style.visibility = 'hidden';
            });


            formPanel.style.borderRadius = '20px 0 0 20px';
            actionPanel.style.borderRadius = '0 20px 20px 0';

        }
        // ! update the state before the transition has a chance to complete, to have the content appear
        const timeoutState = setTimeout(() => {

            // remove the transition on the child elements to reposition them on the opposite side of the incoming direciton
            [...actionPanelChildren].forEach(child => {
                child.style.transition = 'none';
                child.style.transform = `translateX(${signIn ? (-actionBoundingRect.width / 3) : (actionBoundingRect.width / 3)}%)`;
            });

            this.setState({
                signIn: !signIn
            });

            clearTimeout(timeoutState);
        }, 350);

        const timeoutChildren = setTimeout(() => {
            // transition the child elements back into view
            [...actionPanelChildren].forEach(child => {
                child.style.transition = 'all 0.35s cubic-bezier(.63,.39,.54,.91)';
                child.style.transform = `translateX(0)`;
                child.style.opacity = 1;
                child.style.visibility = 'visible';
            });
            clearTimeout(timeoutChildren);
        }, 400);

        // after the transition is complete
        const timeoutTransition = setTimeout(() => {
            // remove the transition
            formPanel.style.transition = 'none';
            actionPanel.style.transition = 'none';
            // immediately remove the translation and re-arrange the elements to have the action panel effectively to the left
            // ! accessibility concerns
            formPanel.style.transform = 'translate(0)';
            actionPanel.style.transform = 'translate(0)';
            actionPanel.style.order = signIn ? -1 : 1;

            this.setState({
                transition: false
            })

            clearTimeout(timeoutTransition);
        }, 700);

    }
    // include the two panels with the content dictated by the boolean
    render() {
        return (
            <div className="logInBody">
                <div className="logInModal">
                    <FormPanel signIn={this.state.signIn} />
                    <ActionPanel signIn={this.state.signIn} slide={this.slide} />
                </div>
            </div>
        );
    }
}
export default logIn;