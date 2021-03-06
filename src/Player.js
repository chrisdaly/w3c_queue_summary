import React, { Component } from "react";
import { Grid, Flag } from "semantic-ui-react";

import Mmr from "./Mmr.js";

import human from "./icons/human.png";
import orc from "./icons/orc.png";
import elf from "./icons/elf.png";
import undead from "./icons/undead.png";
import random from "./icons/random.png";

class Player extends Component {
  render() {
    const { race, oldMmr, name, location, battleTag } = this.props.data;
    let countryCode = location !== null ? location.toLowerCase() : "";
    const raceMapping = {
      8: undead,
      0: random,
      4: elf,
      2: orc,
      1: human,
    };
    const raceIcon = raceMapping[race];
    const iconStyle = { width: "16px", height: "11px" };
    // const background = ".";

    return (
      <Grid divided="vertically" className={"playerCard"}>
        <Grid.Row columns={1} className={"playerTop"}>
          <Grid.Column width={16} className="playerName">
            <a target="_blank" href={`https://w3champions.com/player/${battleTag}`} rel="noreferrer">
              {name}
            </a>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} className={"playerBottom"}>
          <Grid.Column width={4}>
            <Flag name={countryCode} style={iconStyle}></Flag>
          </Grid.Column>
          <Grid.Column width={8}>
            <Mmr data={oldMmr}></Mmr>
          </Grid.Column>
          <Grid.Column width={4}>
            <img src={raceIcon} style={iconStyle} alt={race} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Player;
