import React from "react";
import { Container } from "react-bootstrap";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";

const Rules = ({ location }) => (
  <>
    <MetaData title="Ukemi Game Rules" location={location} image="/images/og-index.png" />
    <TitleSection location={location} crumbLabel="Ukemi Game Rules" />
    <PageTitle title="Ukemi Card Game Rules" />
    <section className="content-body">
      <Container className="inner">
        <h3 id="ukemi-card-game">Ukemi card game</h3>
        <p>
          Like parkour, &nbsp;this game can be played any way you want. In fact, we encourage you to
          &nbsp;experiment and discover new play styles. To get you started however we &nbsp;have
          provided you with some guidelines and a default method of play – &nbsp;you can find these
          below. Be sure to send us a message and tag us on your social media, we love to see the
          cards and play styles you will come up with!
        </p>
        <h6 id="contents">Contents</h6>
        <ul>
          <li>
            <strong>30 Movement Cards</strong> – These are the cards with the movements and tricks
            you perform.
          </li>
          <li>
            <strong>20 Condition Cards</strong> – These are modifier cards that attach a condition
            to a movement.
          </li>
          <li>
            <strong>20 Wild Cards</strong> – These cards are like condition cards but they are
            harder and more unusual.
          </li>
          <li>
            <strong>12 Blank Cards</strong> – These are blank cards for you to write on.
          </li>
          <li>
            <strong>2 &nbsp;Info Cards</strong> – These are for information, they do not play a part
            in the game.
          </li>
        </ul>
        <h6 id="example-play-styles">Example Play Styles</h6>
        <ul>
          <li>
            <strong>Classic:</strong> Each card collected counts for a single point. First to 10
            points wins.
          </li>
          <li>
            <strong>Mega Match:</strong> Keep playing until all of the movement cards have been
            used, keeping score like in the classic style. At the end, the person with the most
            points wins.
          </li>
          <li>
            <strong>Add On:</strong> Players must pick a card as a group then complete the
            &nbsp;movement. Each round a new card is produced and added on to create a &nbsp;chain.
            This continues until only one player can complete the chain. In &nbsp;the event that
            more than one player can’t get past a stage it is &nbsp;declared a draw.
          </li>
          <li>
            <strong>Blind:</strong> Players must select all cards before flipping them. In &nbsp;the
            event where one of those cards is a combo card, the player must &nbsp;take an extra
            movement card.
          </li>
        </ul>
        <p>
          <em>
            Remember these styles can be adapted to suit your environment, you can completely remove
            the competitive element if you wish.
          </em>
        </p>
        <h6 id="order-of-play">Order of Play</h6>
        <p>
          Players take turns at picking up cards from each deck; movement (yellow), condition (blue)
          and wildcard (orange). Coin toss to decide who goes first. Each player must choose a
          movement card. Players then have the option of, but aren’t limited to, drawing a condition
          card. Similarly, players then have the option to draw as many wildcards as they wish. The
          difficulty can be increased further by the selection of multiple wildcards.
        </p>
        <h6 id="attempt-options">Attempt Options</h6>
        <ol>
          <li>Players have a single attempt to land the challenge.</li>
          <li>
            Players have the same amount of attempts as they have collected &nbsp;cards. Each time
            an unsuccessful attempt is made a point is deducted &nbsp;from the number of possible
            points the player can receive e.g. if they &nbsp;draw 3 cards and land it first try they
            get 3 points. If they fail once &nbsp;and landed it on their second, they get two. And
            if they land it on &nbsp;their last try then they only get 1.
          </li>
          <li>
            Players must land the selection multiple times, equal to the number &nbsp;of cards
            selected e.g. if they have two cards they have to land it &nbsp;twice.
          </li>
        </ol>
        <h6 id="scaling-the-game">Scaling the game</h6>
        <p>To make the game more inclusive you can take one/all the following measures:</p>
        <ul>
          <li>
            <strong>Exclusion:</strong> Remove cards that contain techniques that a player
            &nbsp;cannot complete or environment/conditions which they are unwilling to &nbsp;engage
            with.
          </li>
          <li>
            <strong>Handicap:</strong> Similar to Golf, players can play with a handicap. A
            &nbsp;player with a handicap of 1 gets a point less than they normally would &nbsp;for
            each hand completed
          </li>
          <li>
            <strong>Variable Play:</strong> The group can decide whether or not the &nbsp;selection
            is suitable for a players skill level. This allows the group &nbsp;to fairly decide on
            what is an acceptable level of difficulty for the &nbsp;player to receive the points.
            Allowing players of multiple skill levels &nbsp;to play the same cards with an equal
            challenge.
          </li>
          <li>
            <strong>Non-Competitive Play:</strong> Ukemi does not have to be competitive &nbsp;and
            players unwilling to subscribe to a win/loss system can play the &nbsp;game without
            keeping track of who’s winning/won. The game is an &nbsp;excellent resource for
            warm-ups, spot exploration, choreography &nbsp;generation, coaching, and casual play as
            well as a competitive game
          </li>
        </ul>
        <h6 id="blank-cards">Blank Cards</h6>
        <p>
          Ukemi is currently on version 1 and will evolve each time we print a &nbsp;new run. We
          can’t think of everything so to make sure we didn’t miss out &nbsp;any of your favorite
          movements, conditions or wild cards, we have &nbsp;included blank cards in every pack.
        </p>
      </Container>
    </section>
  </>
);

export default Rules;
