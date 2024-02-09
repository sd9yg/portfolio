import React, { Component } from "react";
import classNames from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData";


export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1,
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
        return skills.map((skill, index) => (      
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
               <h3>&#x2022; {skill.title}</h3>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END"];

    return (
      <div className="skill-menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
          {/* <img src="img_girl.jpg" alt={{item}+".png"}></img> */}           
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    );
  }
}
