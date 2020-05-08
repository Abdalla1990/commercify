import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Twitter from 'react-icons/lib/io/social-twitter';
import Facebook from 'react-icons/lib/io/social-instagram'
import Arrow from 'react-icons/lib/md/arrow-drop-down';

class Menu  extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        accounts : [{name: "Users", url: "/maintainance"}, {name: "My Orders", url: "/maintainance"}, {name: "Account Details", url: "/maintainance"}, {name: "Forgot Password", url: "/maintainance"}],
        help : [{name: "Help", url: ""}, {name: "Printing Size", url: ""}, {name: "Return Policy", url: ""}, {name: "FAQ", url: ""}, {name: "Privacy Policy", url: ""}, {name: "About Us", url: ""}, {name: "Contact Us", url: ""}],
        contact : [{name:"subscripe to our newsletter"}, {name:"   Name"}, {name:"   Email"}, {name:"Subscripe"}]
      }
    }

    render(){
			return (
        <div className="c-footer-container-wrapper">
          <div className="c-footer-container">
            <div className="c-logo">
            <div>
              <Link  to="/" >
                <img src="/White-mob.png"></img>
              </Link>
            </div>
            <div>
              <Link className="c-logo-twitter" to="/">
                <Twitter />
              </Link> 
              <Link className="c-logo-insta" to="/">
                <Facebook />
              </Link>
            </div>
          </div>
            <div className="c-footer-nav-wrapper" >
              <div className="c-footer-help-container">
                <p className="c-footer-nav-title">{this.state.help[0].name}</p>
                <div className="c-footer-nave-item-container">{ this.state.help.map((helpItem, index) => index === 0 ? null :
                  <Link to={helpItem.url} className="c-footer-nave-item">{helpItem.name}</Link>
                  )}
                </div>
              </div>
              <div className="c-footer-accounts-container">
                <p className="c-footer-nav-title">{this.state.accounts[0].name}</p>
                <div className="c-footer-nave-item-container">{ this.state.accounts.map((account, index) => index === 0 ? null :
                  <Link to={account.url} className="c-footer-nave-item">{account.name}</Link>
                  )}
                </div>
              </div>
            </div>
            <div className="c-footer-contact-us-form">
              <p className="c-footer-contact-us-title">{this.state.contact[0].name}</p>
              <div className="c-footer-contact-us-item-container">{ this.state.contact.map((contactFormItem, index) => index === 0  || index === 3 ? null :
                <input className="c-footer-contact-us-item" placeholder={contactFormItem.name} />
                )}
              </div>
              <button className="c-footer-contact-us-button" >{this.state.contact[3].name}</button>
            </div>
          </div>
        </div>
			)
    }
}

export default connect()(Menu)