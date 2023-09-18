import * as React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';
import Sidebar from './sidebar';

import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const help = require('./images/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}


const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  var x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #f8f8f8;
  position: relative;
  display: none;
  background: ${(props) => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 767px) {
    display: block;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            githubUrl
            helpUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {
      const logoImg = require('./images/logo.svg');

      const twitter = require('./images/twitter.svg');

      // const discordBrandsBlock = require('./images/discord-brands-block.svg');
      //
      // const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      const {
        site: {
          siteMetadata: { githubUrl, helpUrl, tweetText, logo, headerLinks },
        },
      } = data;

      const finalLogoLink = 'https://logfire.ai/';

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>

            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand mr-6'}>
                <img
                  className={'img-responsive displayInline -mt-[6px]'}
                  src={logo.image !== '' ? logo.image : logoImg}
                  width={36}
                  height={36}
                  alt={'logo'}
                />  <div className="flex flex-0 -mt-[4px] font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-900 to-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-blue-500 dark:to-white/70">
                  Logfire
                </div>
              </Link>
              <a class="text-xs uppercase tracking-[0.24em]  font-regular !text-slate-900 hover:text-blue-400 focus:opacity-50 px-5 py-3 relative z-10 transition-opacity dark:text-gray-400" href="https://logfire.ai/#features">Features</a>
              <a class="text-xs uppercase tracking-[0.24em]  font-bold !text-slate-900 hover:text-blue-400 focus:opacity-50 px-5 py-3 relative z-10 transition-opacity dark:text-gray-400" href="#">Docs</a>
              <a target="_blank" class="text-xs uppercase tracking-[0.24em]  font-regular !text-slate-900 hover:text-blue-400 focus:opacity-50 px-5 py-3 relative z-10 transition-opacity dark:text-gray-400" href="https://www.linkedin.com/company/logfire-ai/jobs/">Careers</a>

              {/*<div*/}
              {/*  className={'headerTitle displayInline'}*/}
              {/*  dangerouslySetInnerHTML={{ __html: headerTitle }}*/}
              {/*/>*/}
            </div>
            {config.header.social ? (
              <ul
                className="socialWrapper visibleMobileView"
                dangerouslySetInnerHTML={{ __html: config.header.social }}
              ></ul>
            ) : null}
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile navBarUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
            <div id="navbar" className={'topnav'}>
              <div className={'visibleMobile'}>
                <Sidebar location={location} />
                <hr />
              </div>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          className="sidebarLink"
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  } else {
                    return ("")
                  }
                })}
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt={'Help icon'} />
                    </a>
                  </li>
                ) : null}

                {tweetText !== '' ? (
                  <li>
                    <a
                      href={'https://twitter.com/intent/tweet?&text=' + tweetText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                  </li>
                ) : null}
                {tweetText !== '' || githubUrl !== '' ? (
                  <li className="divider hiddenMobile"></li>
                ) : null}
                {config.header.social ? (
                  <li className={'hiddenMobile'}>
                    <ul
                      className="socialWrapper"
                      dangerouslySetInnerHTML={{ __html: config.header.social }}
                    ></ul>
                  </li>
                ) : null}
                {/*{githubUrl !== '' ? (*/}
                {/*  <li className={'githubBtn'}>*/}
                {/*    <GitHubButton*/}
                {/*      href={githubUrl}*/}
                {/*      data-show-count="true"*/}
                {/*      aria-label="Star on GitHub"*/}
                {/*    >*/}
                {/*      Star*/}
                {/*    </GitHubButton>*/}
                {/*  </li>*/}
                {/*) : null}*/}
                {/*<li>*/}
                {/*  <DarkModeSwitch*/}
                {/*    isDarkThemeActive={isDarkThemeActive}*/}
                {/*    toggleActiveTheme={toggleActiveTheme}*/}
                {/*  />*/}
                {/*</li>*/}
              </ul>
            </div>
            <div class="flex mt-0 gap-2"><a class="text-xs text-blue-500 mt-[8px] uppercase tracking-widest" href="https://logfire.ai/signin">Sign In</a></div>
          </nav>
          <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
            <div className={'navBarDefault removePadd'}>
              <span
                onClick={myFunction}
                className={'navBarToggle'}
                onKeyDown={myFunction}
                role="button"
                tabIndex={0}
              >
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
                <span className={'iconBar'}></span>
              </span>
            </div>
            {isSearchEnabled ? (
              <div className={'searchWrapper'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
          </StyledBgDiv>
        </div>
      );
    }}
  />
);

export default Header;
