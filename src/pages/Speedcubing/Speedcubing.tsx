import { FiExternalLink } from 'react-icons/fi';

import WcaProfile from '../../components/WcaProfile/WcaProfile';
import './Speedcubing.css';

function Speedcubing() {
  return (
    <div className="speedcubing">
      <section className="speedcubing__hero">
        <div className="speedcubing__career">
          <p className="page__eyebrow">Speedcubing</p>

          <h1 className="page__title speedcubing__title">
            20 Years of Speedcubing
          </h1>

          <div className="page__body speedcubing__body">
            <p>
              I first picked up a cube in 2005 and began competing in 2007. I
              went on to become a two-time U.S. National Champion and one of
              the leading American speedcubers of my generation, setting world
              and continental records across several events. My peak years for
              speedsolving were between 2008 and 2014.
            </p>

            <p>
              In 2019, I returned to competitive cubing and took on 3x3x3
              Multi-Blind, an event where
              competitors memorize and solve as many cubes as possible while
              blindfolded within a one-hour time limit. In April 2025, that
              pursuit culminated in a world record of 63/66 cubes in 59:50. The
              accomplishment also set the record for the longest gap between
              world records at nearly 15 years (July 2010 – April 2025), and
              remains my greatest competitive achievement to date.
            </p>

            <p>
              The pursuit of this record will also be featured in the upcoming
              documentary Blindfolded Ambition, scheduled for release in 2027.
            </p>

            <p>
              I was also among the first speedcubers to turn the hobby into a
              professional career. Since 2015, I have worked at TheCubicle, a
              leading puzzle retailer based in Elmsford, New York.
            </p>
          </div>

          <div className="speedcubing__career-links">
            <a
              href="https://en.wikipedia.org/wiki/Rowe_Hessler"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia <FiExternalLink />
            </a>

            <a
              href="https://www.thecubicle.com"
              target="_blank"
              rel="noreferrer"
            >
              TheCubicle <FiExternalLink />
            </a>

            <a
              href="https://blindfoldedambition.com/"
              target="_blank"
              rel="noreferrer"
            >
              Blindfolded Ambition <FiExternalLink />
            </a>
          </div>

          <div className="speedcubing__video">
            <iframe
              src="https://www.youtube.com/embed/O31c8FaqJdg"
              title="Rowe Hessler Speedcubing"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <aside className="speedcubing__wca-column">
          <div className="speedcubing__wca-heading">
            <h2>WCA Rankings &amp; Records</h2>
          </div>

          <WcaProfile />
        </aside>
      </section>
    </div>
  );
}

export default Speedcubing;