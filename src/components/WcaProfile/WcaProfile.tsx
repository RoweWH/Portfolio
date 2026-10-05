import { useEffect, useState } from 'react';
import './WcaProfile.css';
import wcaPhoto from '../../assets/wcaphoto.jpg';

const WCA_ID = '2007HESS01';

const PROFILE_URL = `https://www.worldcubeassociation.org/persons/${WCA_ID}`;
const API_URL =
  `https://raw.githubusercontent.com/robiningelbrecht/wca-rest-api/refs/heads/v1/persons/${WCA_ID}.json`;

const EVENT_NAMES: Record<string, string> = {
  '333': '3x3x3 Cube',
  '222': '2x2x2 Cube',
  '444': '4x4x4 Cube',
  '555': '5x5x5 Cube',
  '666': '6x6x6 Cube',
  '777': '7x7x7 Cube',
  '333bf': '3x3x3 Blindfolded',
  '333fm': '3x3x3 Fewest Moves',
  '333oh': '3x3x3 One-Handed',
  clock: 'Clock',
  minx: 'Megaminx',
  pyram: 'Pyraminx',
  skewb: 'Skewb',
  sq1: 'Square-1',
  '444bf': '4x4x4 Blindfolded',
  '555bf': '5x5x5 Blindfolded',
  '333mbf': '3x3x3 Multi-Blind',
};

type Ranking = {
  eventId: string;
  best: number;
  rank: {
    world: number;
    continent: number;
    country: number;
  };
};

type Result = {
  round: string;
  position: number;
  best: number;
};

type Person = {
  id: string;
  numberOfCompetitions: number;

  rank: {
    singles: Ranking[];
    averages: Ranking[];
  };

  records: {
    single: {
      WR: number;
      CR: number;
      NR: number;
    };
    average: {
      WR: number;
      CR: number;
      NR: number;
    };
  };

  results: Record<string, Record<string, Result[]>>;
};

function formatTime(value: number) {
  const totalSeconds = Math.floor(value / 100);
  const centiseconds = value % 100;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${seconds}.${String(centiseconds).padStart(2, '0')}`;
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}.${String(
    centiseconds
  ).padStart(2, '0')}`;
}

function formatMultiBlind(value: number) {
  const text = String(value).padStart(9, '0');

  const difference = 99 - Number(text.slice(0, 2));
  const seconds = Number(text.slice(2, 7));
  const missed = Number(text.slice(7, 9));

  const solved = difference + missed;
  const attempted = solved + missed;

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${solved}/${attempted} ${minutes}:${String(
    remainingSeconds
  ).padStart(2, '0')}`;
}

function formatResult(eventId: string, value?: number) {
  if (!value || value < 0) {
    return '—';
  }

  if (eventId === '333mbf') {
    return formatMultiBlind(value);
  }

  if (eventId === '333fm') {
    return String(value);
  }

  return formatTime(value);
}

function WcaProfile() {
  const [person, setPerson] = useState<Person | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error('Could not load WCA profile');
        }

        const data: Person = await response.json();
        setPerson(data);
      } catch {
        setError(true);
      }
    }

    loadProfile();
  }, []);

  if (error) {
    return (
      <div className="wca-profile wca-profile--message">
        <p>WCA results couldn't be loaded.</p>

        <a href={PROFILE_URL} target="_blank" rel="noreferrer">
          View WCA profile ↗
        </a>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="wca-profile wca-profile--message">
        Loading WCA results...
      </div>
    );
  }

  const singles = new Map(
    person.rank.singles.map((result) => [result.eventId, result])
  );

  const averages = new Map(
    person.rank.averages.map((result) => [result.eventId, result])
  );

  const medals = {
    gold: 0,
    silver: 0,
    bronze: 0,
  };

  for (const competition of Object.values(person.results)) {
    for (const eventResults of Object.values(competition)) {
      for (const result of eventResults) {
        if (result.round !== 'Final' || result.best <= 0) continue;

        if (result.position === 1) medals.gold++;
        if (result.position === 2) medals.silver++;
        if (result.position === 3) medals.bronze++;
      }
    }
  }

  const records = {
    WR: person.records.single.WR + person.records.average.WR,
    CR: person.records.single.CR + person.records.average.CR,
    NR: person.records.single.NR + person.records.average.NR,
  };

  return (
    <div className="wca-profile">
      <div className="wca-profile__topline">
        <a
          className="wca-profile__photo-link"
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="View Rowe Hessler's WCA profile"
        >
          <img
            className="wca-profile__photo"
            src={wcaPhoto}
            alt="Rowe Hessler"
          />
        </a>

        <div className="wca-profile__topline-info">
          <div>
            <span>Name</span>
            <strong>Rowe Hessler</strong>
          </div>

          <div>
            <span>Region</span>
            <strong>United States</strong>
          </div>

          <div>
            <span>WCA ID</span>
            <strong>{person.id}</strong>
          </div>

          <div>
            <span>Competitions</span>
            <strong>{person.numberOfCompetitions}</strong>
          </div>
        </div>

        <a
          className="wca-profile__profile-link"
          href={PROFILE_URL}
          target="_blank"
          rel="noreferrer"
        >
          View WCA Profile ↗
        </a>
      </div>

      <div className="wca-profile__records">
        <div className="wca-profile__records-header">
          <h3>Current Personal Records</h3>

          <div className="wca-profile__column-heading">Single</div>
          <div className="wca-profile__column-heading">Average</div>
        </div>

        <div className="wca-profile__event-list">
          {Object.entries(EVENT_NAMES).map(([eventId, eventName]) => {
            const single = singles.get(eventId);
            const average = averages.get(eventId);

            if (!single && !average) {
              return null;
            }

            return (
              <div className="wca-profile__event" key={eventId}>
                <div className="wca-profile__event-name">
                  {eventName}
                </div>

                <div className="wca-profile__performance">
                  <span className="wca-profile__mobile-heading">
                    Single
                  </span>

                  <strong className="wca-profile__result">
                    {formatResult(eventId, single?.best)}
                  </strong>

                  {single ? (
                    <div className="wca-profile__rankings">
                      <span>
                        <small>NR</small>
                        {single.rank.country}
                      </span>

                      <span>
                        <small>CR</small>
                        {single.rank.continent}
                      </span>

                      <span>
                        <small>WR</small>
                        {single.rank.world}
                      </span>
                    </div>
                  ) : (
                    <div className="wca-profile__rankings">
                      <span>—</span>
                    </div>
                  )}
                </div>

                <div className="wca-profile__performance">
                  <span className="wca-profile__mobile-heading">
                    Average
                  </span>

                  <strong className="wca-profile__result">
                    {formatResult(eventId, average?.best)}
                  </strong>

                  {average ? (
                    <div className="wca-profile__rankings">
                      <span>
                        <small>WR</small>
                        {average.rank.world}
                      </span>

                      <span>
                        <small>CR</small>
                        {average.rank.continent}
                      </span>

                      <span>
                        <small>NR</small>
                        {average.rank.country}
                      </span>
                    </div>
                  ) : (
                    <div className="wca-profile__rankings">
                      <span>—</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="wca-profile__collections">
        <div>
          <h3>Medal Collection</h3>

          <div className="wca-profile__stats">
            <span>
              <strong>{medals.gold}</strong>
              Gold
            </span>

            <span>
              <strong>{medals.silver}</strong>
              Silver
            </span>

            <span>
              <strong>{medals.bronze}</strong>
              Bronze
            </span>
          </div>
        </div>

        <div>
          <h3>Record Collection</h3>

          <div className="wca-profile__stats">
            <span>
              <strong>{records.WR}</strong>
              WR
            </span>

            <span>
              <strong>{records.CR}</strong>
              CR
            </span>

            <span>
              <strong>{records.NR}</strong>
              NR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WcaProfile;