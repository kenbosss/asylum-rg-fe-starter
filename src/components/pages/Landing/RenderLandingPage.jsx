import React from 'react';
// ADD IMPORTS BACK FOR GRAPHS SECTION
import GrantRatesByOfficeImg from '../../../styles/Images/bar-graph-no-text.png';
import GrantRatesByNationalityImg from '../../../styles/Images/pie-chart-no-text.png';
import GrantRatesOverTimeImg from '../../../styles/Images/line-graph-no-text.png';
import HrfPhoto from '../../../styles/Images/paper-stack.jpg';
import '../../../styles/RenderLandingPage.less';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
//for the purposes of testing PageNav
import PageNav from '../../common/PageNav';

function RenderLandingPage(props) {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const history = useHistory();

  return (
    <div className="main">
      <div className="header">
        <div className="header-text-container">
          <h1>Asylum Office Grant Rate Tracker</h1>
          <h3>
            The Asylum Office Grant Rate Tracker provides asylum seekers,
            researchers, policymakers, and the public an interactive tool to
            explore USCIS data on Asylum Office decisions
          </h3>
        </div>
      </div>

      {/* Graphs Section: Add code here for the graphs section for your first ticket */}
      <div className="graphs-section">
        <div className='grant-rates-by-office-graph-container'>
          <img className='gr-office-img' src={GrantRatesByOfficeImg} alt='Grant Rates By Office Graph' />
          <p>Search Grant Rates By Office</p>
        </div>
        <div className='grant-rates-by-nationality-container'>
          <img className='gr-nationality-img' src={GrantRatesByNationalityImg} alt='Grant Rates By Nationality Graph"' />
          <p>Search Grant Rates By Nationality</p>
        </div>
        <div className='grant-rates-over-time-container'>
          <img className='gr-overtime-img' src={GrantRatesOverTimeImg} alt='Grant Rates Over Time Graph"' />
          <p>Search Grant Rates Over Time</p>
        </div>
      </div>
      <div className="view-more-data-btn-container">
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          View the Data
        </Button>
        <Button
          type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}
          onClick={() => history.push('/graphs')}
        >
          Download the Data
        </Button>
      </div>
      <div className="middle-section">
        <div className="hrf-img-container">
          <img src={HrfPhoto} alt="Human Rights First" className="hrf-img" />
        </div>
        <div className="middle-section-text-container">
          <h3>
            Human Rights First has created a search tool to give you a
            user-friendly way to explore a data set of asylum decisions between
            FY 2016 and May 2021 by the USCIS Asylum Office, which we received
            through a Freedom of Information Act request. You can search for
            information on asylum grant rates by year, nationality, and asylum
            office, visualize the data with charts and heat maps, and download
            the data set
          </h3>
        </div>
      </div>
      <div>
        {/* Bottom Section: Add code here for the graphs section for your first ticket */}
        <div>
  <div className="bottom-section">
  <h1>Systemic Disparity Insights</h1>
  <div className = "data-container">
    <div className = "first-data-point-container ">
    <p className = "data-point">36%</p>
    <h4 className = "data-description">
      By the end of the Trump administration, the average<br />asylum office grant had fallen 36 percent from an<br />average of 44 percent in fiscal year 2016
      to 28 percent<br />in fiscal year 2020.
    </h4>
    </div>

    <div className = "second-data-point-container ">
    <p className = "data-point">5%</p>
    <h4 className = "data-description">
       The New York asylum office grant rate dropped to 5<br />percent in fiscal year 2020. 
    </h4>
    </div>

    <div className = "third-data-point-container ">
    <p className = "data-point">6x Lower</p>
    <h4 className = "data-description">
  Between fiscal year 2017 and 2020, the New York
  <br />
  asylum office's average grant rate was six times <br>
  </br>lower than the San Francisco asylum office.
    </h4>
    </div>
   </div>
</div>
<div className="read-button">
  <Button type="default"
          style={{ backgroundColor: '#404C4A', color: '#FFFFFF' }}>
    Read More</Button>
</div>

        <p onClick={() => scrollToTop()} className="back-to-top">
          Back To Top ^
        </p>
      </div>
    </div>
    </div>
  );
}
export default RenderLandingPage;